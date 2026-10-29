// @ts-nocheck -- ported as-is from the original site's vanilla JS so behaviour stays identical.
/* eslint-disable */
/*
 * OCULUS: causal map animation, section navigation and Chart.js charts.
 * Ported from the inline script in project-oculus-main.html. Changes from the original are marked "ported:".
 */

// ported: these scripts used to run on DOMContentLoaded; now they start after React hydrates,
// when "load" may already have fired.
function __onLoad(fn) {
  if (document.readyState === "complete") fn();
  else window.addEventListener("load", fn);
}

let __started = false;

import Chart from "chart.js/auto"; // ported: was loaded from cdnjs

export function initOculusPage() {
  if (__started) return; // ported: guard against React StrictMode double effects
  __started = true;
        (function () {
          var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          if (!Chart) return;

          var COLORS = {
            accent: "#534AB7",
            secondary: "#AFA9EC",
            neutral: "#D3D1C7",
            text: "#1a1a1a",
            grid: "rgba(0,0,0,0.06)",
          };

          (function initCausalMapAnimation() {
            var figure = document.querySelector(".project-causal-relationship-map__figure");
            var svg = figure ? figure.querySelector(".project-causal-relationship-map__svg") : null;
            if (!figure || !svg) return;

            var rings = Array.prototype.slice.call(svg.querySelectorAll('circle[stroke="#D1D5DB"]'));
            var centerGlow = svg.querySelector('circle[fill="url(#cg)"]');
            var centerTexts = Array.prototype.slice
              .call(svg.querySelectorAll("text"))
              .filter(function (t) {
                var v = (t.textContent || "").trim().toLowerCase();
                return v === "blending" || v === "time";
              });
            var nodeGroups = Array.prototype.slice.call(svg.querySelectorAll("g")).filter(function (g) {
              return !!g.querySelector("rect");
            });
            var tier1Nodes = nodeGroups.filter(function (g) {
              var rect = g.querySelector("rect");
              return rect && rect.getAttribute("fill") === "#C7D2FE";
            });
            var tier2Nodes = nodeGroups.filter(function (g) {
              var rect = g.querySelector("rect");
              return rect && rect.getAttribute("fill") === "#6B7280";
            });
            var tier3Nodes = nodeGroups.filter(function (g) {
              var rect = g.querySelector("rect");
              return rect && rect.getAttribute("fill") === "#D1D5DB";
            });
            var links = Array.prototype.slice.call(svg.querySelectorAll("line, path"));

            function addClass(list, className) {
              list.forEach(function (el) {
                el.classList.add(className);
              });
            }

            var centerEls = [];
            if (centerGlow) centerEls.push(centerGlow);
            centerEls = centerEls.concat(centerTexts);

            addClass(centerEls, "crm-anim-center");
            if (rings[0]) rings[0].classList.add("crm-anim-tier-1");
            if (rings[1]) rings[1].classList.add("crm-anim-tier-2");
            if (rings[2]) rings[2].classList.add("crm-anim-tier-3");
            addClass(tier1Nodes, "crm-anim-tier-1");
            addClass(tier2Nodes, "crm-anim-tier-2");
            addClass(tier3Nodes, "crm-anim-tier-3");

            links.forEach(function (el) {
              el.classList.add("crm-anim-link");
              if (typeof el.getTotalLength === "function") {
                el.style.setProperty("--crm-line-len", String(Math.ceil(el.getTotalLength())));
              }
            });

            figure.classList.add("is-anim-ready");

            if (prefersReducedMotion) {
              figure.classList.add("is-visible");
              return;
            }

            var io = new IntersectionObserver(
              function (entries) {
                entries.forEach(function (entry) {
                  if (!entry.isIntersecting) return;
                  figure.classList.add("is-visible");
                  io.disconnect();
                });
              },
              { threshold: 0.35 }
            );
            io.observe(figure);
          })();

          (function initOculusToc() {
            var toc = document.querySelector(".oculus-toc");
            var links = Array.prototype.slice.call(document.querySelectorAll(".oculus-toc__link"));
            if (!toc || links.length === 0) return;

            var sections = links
              .map(function (link) {
                var id = (link.getAttribute("href") || "").replace("#", "");
                if (!id) return null;
                var heading = document.getElementById(id);
                var section = heading ? heading.closest("section") : null;
                if (!section) return null;
                return { link: link, section: section, id: id };
              })
              .filter(Boolean);

            if (sections.length === 0) return;

            var contextSection = document.querySelector(".project-context");
            var heroAlign = document.querySelector("#oculus-hero");

            function alignTocToHeroLeft() {
              if (!heroAlign) return;
              var rect = heroAlign.getBoundingClientRect();
              toc.style.left = Math.round(rect.left) + "px";
            }

            function updateTocVisibility() {
              if (!contextSection) return;
              var thresholdY = contextSection.offsetTop - 120;
              toc.classList.toggle("is-visible", window.scrollY >= thresholdY);
            }

            function setActive(id) {
              sections.forEach(function (item) {
                item.link.classList.toggle("is-active", item.id === id);
              });
            }

            function updateActiveByScroll() {
              var probeY = window.scrollY + Math.max(120, window.innerHeight * 0.3);
              var designExperimentHeading = document.getElementById("oculus-design-experiment-heading");
              var galleryHeading = document.getElementById("oculus-gallery-design-heading");
              var designExperimentSection = designExperimentHeading
                ? designExperimentHeading.closest("section")
                : null;
              var gallerySection = galleryHeading ? galleryHeading.closest("section") : null;

              if (
                designExperimentSection &&
                gallerySection &&
                probeY >= designExperimentSection.offsetTop &&
                probeY < gallerySection.offsetTop
              ) {
                setActive("oculus-design-experiment-heading");
                return;
              }

              var current = sections[0];
              sections.forEach(function (item) {
                if (item.section.offsetTop <= probeY) current = item;
              });
              if (current) setActive(current.id);
            }

            alignTocToHeroLeft();
            updateTocVisibility();
            updateActiveByScroll();

            __onLoad( function () {
              alignTocToHeroLeft();
            });

            var rafId = null;
            window.addEventListener(
              "scroll",
              function () {
                if (rafId != null) cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(function () {
                  rafId = null;
                  updateTocVisibility();
                  updateActiveByScroll();
                });
              },
              { passive: true }
            );

            window.addEventListener("resize", function () {
              alignTocToHeroLeft();
              updateTocVisibility();
              updateActiveByScroll();
            });
          })();

          function makeOptions(maxX) {
            return {
              responsive: true,
              maintainAspectRatio: false,
              indexAxis: "y",
              animation: prefersReducedMotion ? false : undefined,
              plugins: {
                legend: { display: false },
                tooltip: {
                  callbacks: {
                    label: function (ctx) {
                      return ctx.parsed.x + "%";
                    },
                  },
                },
              },
              scales: {
                x: {
                  max: maxX,
                  ticks: {
                    color: COLORS.text,
                    font: { size: 12 },
                    callback: function (v) {
                      return v + "%";
                    },
                  },
                  grid: { color: COLORS.grid },
                  border: { display: false },
                },
                y: {
                  ticks: { color: COLORS.text, font: { size: 13 } },
                  grid: { display: false },
                  border: { display: false },
                },
              },
              layout: { padding: { right: 40 } },
            };
          }

          var labelPlugin = {
            id: "barLabels",
            afterDatasetsDraw: function (chart) {
              var ctx = chart.ctx;
              var dataset = chart.data.datasets[0];
              if (!dataset) return;
              var meta = chart.getDatasetMeta(0);
              if (!meta || !meta.data) return;

              ctx.save();
              ctx.fillStyle = COLORS.text;
              ctx.font = '600 13px "SF Pro Text", "SF Pro Display", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans TC, sans-serif';
              ctx.textAlign = "left";
              ctx.textBaseline = "middle";

              dataset.data.forEach(function (val, i) {
                var bar = meta.data[i];
                if (!bar) return;
                ctx.fillText(String(val) + "%", bar.x + 8, bar.y);
              });

              ctx.restore();
            },
          };

          new Chart(document.getElementById("oculus-chart-sales-share"), {
            type: "bar",
            data: {
              labels: ["Mid price (USD 30-60)", "Low price (USD <30)", "High price (USD 60-120)"],
              datasets: [
                {
                  data: [70, 15, 14],
                  backgroundColor: [COLORS.accent, COLORS.secondary, COLORS.neutral],
                  borderRadius: 3,
                  barThickness: 28,
                },
              ],
            },
            options: makeOptions(80),
            plugins: [labelPlugin],
          });

          new Chart(document.getElementById("oculus-chart-revenue-share"), {
            type: "bar",
            data: {
              labels: ["Mid price (USD 30-60)", "High price (USD 60-120)", "Low price (USD <30)"],
              datasets: [
                {
                  data: [65, 28, 7],
                  backgroundColor: [COLORS.accent, COLORS.secondary, COLORS.neutral],
                  borderRadius: 3,
                  barThickness: 28,
                },
              ],
            },
            options: makeOptions(75),
            plugins: [labelPlugin],
          });

          new Chart(document.getElementById("oculus-chart-high-price"), {
            type: "bar",
            data: {
              labels: [
                "Ninja BN401",
                "Nutribullet NB9",
                "Nutribullet Pro",
                "Nutribullet Flip",
                "Nutribullet Ultra",
                "Beast blender",
              ],
              datasets: [
                {
                  data: [62.6, 12.9, 11.1, 8.3, 2.1, 1.8],
                  backgroundColor: [
                    COLORS.accent,
                    COLORS.secondary,
                    COLORS.secondary,
                    COLORS.neutral,
                    COLORS.neutral,
                    COLORS.neutral,
                  ],
                  borderRadius: 3,
                  barThickness: 28,
                },
              ],
            },
            options: makeOptions(72),
            plugins: [labelPlugin],
          });

          (function initNegativeReviewChart() {
            var el = document.getElementById("reviewChart");
            if (!el) return;

            var textColor = "rgba(0,0,0,0.75)";
            var highlightTextColor = "#534AB7";
            var gridColor = "rgba(0,0,0,0.06)";

            var labels = [
              "Noise",
              ["After prolonged blending,", "large particles still remain."],
              "Cavitation",
              "Liquid penetrates device",
              "Difficult to clean",
              "Blending time too long",
              "Need liquid to keep running",
            ];

            var total = 404;
            var rowTotals = [132, 56, 33, 20, 13, 8, 5];

            var rawData = {
              "Nutribullet Pro 1200": [60, 14, 7, 2, 0, 1, 0],
              "Ninja Pro": [15, 12, 11, 2, 4, 3, 1],
              "Nutribullet NB9": [30, 17, 5, 5, 6, 2, 1],
              "Beast Blender": [2, 2, 3, 7, 2, 2, 1],
              "Nutribullet NB50500": [24, 8, 5, 4, 0, 0, 1],
              "Nutribullet Flip": [1, 3, 2, 0, 1, 0, 1],
            };

            var pctOfTotal = {};
            Object.keys(rawData).forEach(function (key) {
              pctOfTotal[key] = rawData[key].map(function (v) {
                return Math.round((v / total) * 1000) / 10;
              });
            });

            var palette = ["#2D3A5E", "#5A6A94", "#8496BA", "#A8B6CD", "#C5CEDB", "#DDE3EB"];

            var datasets = Object.keys(rawData).map(function (name, i) {
              return {
                label: name,
                data: pctOfTotal[name],
                backgroundColor: palette[i],
                barThickness: 20,
                raw_counts: rawData[name],
              };
            });

            new Chart(el, {
              type: "bar",
              data: { labels: labels, datasets: datasets },
              options: {
                indexAxis: "y",
                responsive: true,
                maintainAspectRatio: false,
                animation: prefersReducedMotion ? false : undefined,
                layout: { padding: { right: 40 } },
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    backgroundColor: "#fff",
                    titleColor: "#000",
                    bodyColor: "#555",
                    borderColor: "rgba(0,0,0,0.1)",
                    borderWidth: 1,
                    callbacks: {
                      label: function (ctx) {
                        var count = ctx.dataset.raw_counts[ctx.dataIndex];
                        return ctx.dataset.label + ": " + count + " (" + ctx.raw + "%)";
                      },
                      afterBody: function (items) {
                        var idx = items[0].dataIndex;
                        var rowTotal = rowTotals[idx];
                        var rowPct = Math.round((rowTotal / total) * 1000) / 10;
                        return "\nCategory total: " + rowTotal + " (" + rowPct + "%)";
                      },
                    },
                  },
                },
                scales: {
                  x: {
                    stacked: true,
                    max: 35,
                    ticks: {
                      color: textColor,
                      font: { size: 11 },
                      callback: function (v) {
                        return v + "%";
                      },
                      stepSize: 5,
                    },
                    grid: { color: gridColor },
                    border: { display: false },
                    title: { display: false },
                  },
                  y: {
                    stacked: true,
                    ticks: {
                      color: function (context) {
                        // Highlight key negative review categories.
                        // labels = ["Noise", ["After prolonged blending,", "large particles still remain."], "Cavitation", ...]
                        if (context && typeof context.index === "number" && [0, 1, 2].indexOf(context.index) !== -1) {
                          return highlightTextColor;
                        }
                        return textColor;
                      },
                      font: { size: 12 },
                      crossAlign: "far",
                    },
                    grid: { display: false },
                    border: { display: false },
                  },
                },
              },
            });
          })();

                  // ported: replaced by the shadcn Carousel component.
          // ported: replaced by the shadcn Carousel component.
  (function initParticleAnalysisChart() {
            var el = document.getElementById("oculus-particle-analysis-chart");
            if (!el || !Chart) return;

            new Chart(el.getContext("2d"), {
              data: {
                labels: ["Square", "Trapezoid", "Slope", "Pentagon", "Stepped"],
                datasets: [
                  {
                    label: "Particle count",
                    type: "bar",
                    data: [250, 282, 213, 216, 217],
                    backgroundColor: "rgba(83, 74, 183, 0.75)",
                    borderWidth: 0,
                    yAxisID: "y",
                    barPercentage: 0.5,
                    categoryPercentage: 0.7,
                    order: 2,
                  },
                  {
                    label: "Maximum particle size (mm)",
                    type: "line",
                    data: [9.8, 10, 9.5, 11, 11.5],
                    borderColor: "#1F2937",
                    backgroundColor: "#1F2937",
                    borderWidth: 1.3,
                    pointRadius: 3,
                    pointBackgroundColor: "#1F2937",
                    pointBorderColor: "#1F2937",
                    tension: 0,
                    yAxisID: "y1",
                    order: 1,
                  },
                ],
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: prefersReducedMotion ? false : undefined,
                interaction: { mode: "index", intersect: false },
                plugins: {
                  title: {
                    display: true,
                    text: "Particle Size and Count Analysis",
                    color: "#000000",
                    font: {
                      family:
                        "SF Pro Text, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans TC, sans-serif",
                      size: 14,
                      weight: "400",
                    },
                    padding: { bottom: 14 },
                  },
                  legend: {
                    position: "bottom",
                    labels: {
                      font: {
                        family:
                          "SF Pro Text, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans TC, sans-serif",
                      size: 10,
                      },
                      color: "#374151",
                      usePointStyle: true,
                    pointStyleWidth: 12,
                    padding: 12,
                    },
                  },
                },
                scales: {
                  x: {
                    grid: { display: false },
                    ticks: {
                      color: "#374151",
                      font: { size: 10 },
                    },
                  },
                  y: {
                    type: "linear",
                    position: "left",
                    min: 0,
                    max: 600,
                    ticks: {
                      stepSize: 50,
                      color: "#374151",
                      font: { size: 9 },
                    },
                    title: {
                      display: true,
                      text: "Particle count",
                      color: "#374151",
                      font: { size: 10, weight: "400" },
                    },
                    grid: { color: "rgba(0,0,0,0.08)" },
                  },
                  y1: {
                    type: "linear",
                    position: "right",
                    min: 5.5,
                    max: 12,
                    ticks: {
                      stepSize: 0.5,
                      color: "#374151",
                      font: { size: 9 },
                    },
                    title: {
                      display: true,
                      text: "Maximum particle size (mm)",
                      color: "#374151",
                      font: { size: 10, weight: "400" },
                    },
                    grid: { drawOnChartArea: false },
                  },
                },
              },
            });
          })();

          (function initParticleAnalysisChartBladeBase() {
            var el = document.getElementById("oculus-particle-analysis-chart-blade-base");
            if (!el || !Chart) return;

            new Chart(el.getContext("2d"), {
              data: {
                labels: [
                  "Four-Ridge",
                  "Six-Ridge",
                  "Eight-Ridge",
                  "Six-Ridge (Round1)",
                  "Six-Ridge (Round2)",
                ],
                datasets: [
                  {
                    label: "Particle count",
                    type: "bar",
                    data: [250, 260, 210, 230, 230],
                    backgroundColor: "rgba(83, 74, 183, 0.75)",
                    borderWidth: 0,
                    yAxisID: "y",
                    barPercentage: 0.5,
                    categoryPercentage: 0.7,
                    order: 2,
                  },
                  {
                    label: "Maximum particle size (mm)",
                    type: "line",
                    data: [8.0, 7.2, 7.4, 7.6, 9.5],
                    borderColor: "#1F2937",
                    backgroundColor: "#1F2937",
                    borderWidth: 1.3,
                    pointRadius: 3,
                    pointBackgroundColor: "#1F2937",
                    pointBorderColor: "#1F2937",
                    tension: 0,
                    yAxisID: "y1",
                    order: 1,
                  },
                ],
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: prefersReducedMotion ? false : undefined,
                interaction: { mode: "index", intersect: false },
                plugins: {
                  title: {
                    display: true,
                    text: "Particle Size and Count Analysis",
                    color: "#000000",
                    font: {
                      family:
                        "SF Pro Text, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans TC, sans-serif",
                      size: 14,
                      weight: "400",
                    },
                    padding: { bottom: 14 },
                  },
                  legend: {
                    position: "bottom",
                    labels: {
                      font: {
                        family:
                          "SF Pro Text, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans TC, sans-serif",
                        size: 10,
                      },
                      color: "#374151",
                      usePointStyle: true,
                      pointStyleWidth: 12,
                      padding: 12,
                    },
                  },
                },
                scales: {
                  x: {
                    grid: { display: false },
                    ticks: {
                      color: "#374151",
                      font: { size: 9 },
                      maxRotation: 45,
                      minRotation: 0,
                    },
                  },
                  y: {
                    type: "linear",
                    position: "left",
                    min: 0,
                    max: 600,
                    ticks: {
                      stepSize: 50,
                      color: "#374151",
                      font: { size: 9 },
                    },
                    title: {
                      display: true,
                      text: "Particle count",
                      color: "#374151",
                      font: { size: 10, weight: "400" },
                    },
                    grid: { color: "rgba(0,0,0,0.08)" },
                  },
                  y1: {
                    type: "linear",
                    position: "right",
                    min: 5.5,
                    max: 12,
                    ticks: {
                      stepSize: 0.5,
                      color: "#374151",
                      font: { size: 9 },
                    },
                    title: {
                      display: true,
                      text: "Maximum particle size (mm)",
                      color: "#374151",
                      font: { size: 10, weight: "400" },
                    },
                    grid: { drawOnChartArea: false },
                  },
                },
              },
            });
          })();

          (function initCupExp3_2Charts() {
            var el1 = document.getElementById("oculus-cup-exp3-2-chart1");
            var el2 = document.getElementById("oculus-cup-exp3-2-chart2");
            if (!el1) return;

            var sharedOptions = {
              responsive: true,
              maintainAspectRatio: false,
              interaction: { mode: "index", intersect: false },
              plugins: {
                title: {
                  display: true,
                  text: "Particle Size and Count Analysis",
                  color: "#534AB7",
                  font: {
                    family:
                      "SF Pro Text, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans TC, sans-serif",
                    size: 14,
                    weight: "400",
                  },
                  padding: { bottom: 16 },
                },
                legend: {
                  position: "bottom",
                  labels: {
                    font: {
                      family:
                        "SF Pro Text, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans TC, sans-serif",
                      size: 10,
                    },
                    color: "#374151",
                    usePointStyle: true,
                    pointStyleWidth: 14,
                    padding: 16,
                    boxWidth: 10,
                    boxHeight: 10,
                  },
                },
              },
              scales: {
                x: {
                  grid: { display: false },
                  ticks: {
                    font: {
                      family:
                        "SF Pro Text, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans TC, sans-serif",
                      size: 10,
                    },
                    color: "#374151",
                  },
                },
                y: {
                  type: "linear",
                  position: "left",
                  min: 0,
                  max: 600,
                  ticks: {
                    stepSize: 50,
                    font: {
                      family:
                        "SF Pro Text, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans TC, sans-serif",
                      size: 9,
                    },
                    color: "#374151",
                  },
                  title: {
                    display: true,
                    text: "maximum particle size(mm)",
                    color: "#374151",
                    font: {
                      family:
                        "SF Pro Text, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans TC, sans-serif",
                      size: 10,
                      weight: "400",
                    },
                  },
                  grid: { color: "rgba(0,0,0,0.08)" },
                },
                y1: {
                  type: "linear",
                  position: "right",
                  min: 5.5,
                  max: 12,
                  ticks: {
                    stepSize: 0.5,
                    font: {
                      family:
                        "SF Pro Text, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans TC, sans-serif",
                      size: 9,
                    },
                    color: "#374151",
                  },
                  title: {
                    display: true,
                    text: "Particle count",
                    color: "#374151",
                    font: {
                      family:
                        "SF Pro Text, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans TC, sans-serif",
                      size: 10,
                      weight: "400",
                    },
                  },
                  grid: { drawOnChartArea: false },
                },
              },
            };

            new Chart(el1.getContext("2d"), {
              type: "bar",
              data: {
                labels: ["Round Cup Bottom", "Square Cup Bottom"],
                datasets: [
                  {
                    label: "Particle count",
                    type: "bar",
                    data: [200, 15],
                    backgroundColor: "rgba(83, 74, 183, 0.75)",
                    borderWidth: 0,
                    yAxisID: "y",
                    barPercentage: 0.5,
                    categoryPercentage: 0.7,
                    order: 2,
                  },
                  {
                    label: "Maximum particle size(mm)",
                    type: "line",
                    data: [8.9, 8.5],
                    borderColor: "#1F2937",
                    backgroundColor: "#1F2937",
                    borderWidth: 1.5,
                    pointRadius: 3,
                    pointBackgroundColor: "#1F2937",
                    pointBorderColor: "#1F2937",
                    tension: 0,
                    yAxisID: "y1",
                    order: 1,
                  },
                ],
              },
              options: sharedOptions,
            });

            if (!el2) return;
            new Chart(el2.getContext("2d"), {
              type: "bar",
              data: {
                labels: ["Square Cup Bottom", "90 Degree -", "90 Degree +"],
                datasets: [
                  {
                    label: "Particle count",
                    type: "bar",
                    data: [40, 35, 15],
                    backgroundColor: "rgba(83, 74, 183, 0.75)",
                    borderWidth: 0,
                    yAxisID: "y",
                    barPercentage: 0.5,
                    categoryPercentage: 0.7,
                    order: 2,
                  },
                  {
                    label: "Maximum particle size(mm)",
                    type: "line",
                    data: [8.8, 8.1, 6.2],
                    borderColor: "#1F2937",
                    backgroundColor: "#1F2937",
                    borderWidth: 1.5,
                    pointRadius: 3,
                    pointBackgroundColor: "#1F2937",
                    pointBorderColor: "#1F2937",
                    tension: 0,
                    yAxisID: "y1",
                    order: 1,
                  },
                ],
              },
              options: sharedOptions,
            });
          })();

        })();

}
