// @ts-nocheck -- ported as-is from the original site's vanilla JS so behaviour stays identical.
/* eslint-disable */
/*
 * EYEZEN: section navigation and page behaviours.
 * Ported from the inline script in project-eyezen-main.html. Changes from the original are marked "ported:".
 */

// ported: these scripts used to run on DOMContentLoaded; now they start after React hydrates,
// when "load" may already have fired.
function __onLoad(fn) {
  if (document.readyState === "complete") fn();
  else window.addEventListener("load", fn);
}

let __started = false;

export function initEyezenPage() {
  if (__started) return; // ported: guard against React StrictMode double effects
  __started = true;
        (function () {
          (function initEyezenToc() {
            var toc = document.querySelector(".eyezen-toc");
            var links = Array.prototype.slice.call(document.querySelectorAll(".eyezen-toc__link"));
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
            var heroAlign = document.querySelector("#eyezen-hero");

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

          var panel = document.querySelector(".project-blur-panel");
          var video = document.querySelector(".project-blur-panel__demo");
          var blur = document.querySelector(".project-blur-panel__blur");
          if (!panel || !video || !blur) return;
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

          function startBlurDrift() {
            blur.classList.add("project-blur-panel__blur--active");
          }

          function tryPlayDemo() {
            var playPromise = video.play();
            if (playPromise && playPromise.catch) {
              playPromise.catch(function () {});
            }
          }

          video.addEventListener("playing", startBlurDrift, { once: true });

          if (!video.paused && video.readyState >= 2) {
            startBlurDrift();
          }

          var demoObserver = new IntersectionObserver(
            function (entries) {
              if (entries[0].isIntersecting) {
                tryPlayDemo();
              } else {
                video.pause();
              }
            },
            { threshold: 0.15, rootMargin: "0px 0px 8% 0px" }
          );
          demoObserver.observe(panel);
        })();

}
