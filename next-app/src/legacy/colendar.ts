// @ts-nocheck -- ported as-is from the original site's vanilla JS so behaviour stays identical.
/* eslint-disable */
/*
 * Colendar: section navigation and scroll-driven demo videos.
 * Ported from the inline script in project-colendar.html. Changes from the original are marked "ported:".
 */

// ported: these scripts used to run on DOMContentLoaded; now they start after React hydrates,
// when "load" may already have fired.
function __onLoad(fn) {
  if (document.readyState === "complete") fn();
  else window.addEventListener("load", fn);
}

let __started = false;

export function initColendarPage() {
  if (__started) return; // ported: guard against React StrictMode double effects
  __started = true;
        (function initColendarToc() {
          var toc = document.querySelector(".colendar-toc");
          var links = Array.prototype.slice.call(document.querySelectorAll(".colendar-toc__link"));
          if (!toc || links.length === 0) return;

          var sections = links
            .map(function (link) {
              var id = (link.getAttribute("href") || "").replace("#", "");
              if (!id) return null;
              var groupAttr = link.getAttribute("data-toc-sections");
              var groupIds = groupAttr
                ? groupAttr.split(",").map(function (s) {
                    return s.trim();
                  })
                : null;
              var ids = groupIds && groupIds.length ? groupIds : [id];
              var markers = ids
                .map(function (sectionId) {
                  var heading = document.getElementById(sectionId);
                  var section = heading ? heading.closest("section") : null;
                  if (!section) return null;
                  return { id: sectionId, section: section };
                })
                .filter(Boolean);
              if (markers.length === 0) return null;
              return { link: link, id: id, groupIds: groupIds, markers: markers };
            })
            .filter(Boolean);

          if (sections.length === 0) return;

          var scrollMarkers = [];
          sections.forEach(function (item) {
            item.markers.forEach(function (marker) {
              scrollMarkers.push({ link: item.link, id: marker.id, section: marker.section, groupIds: item.groupIds });
            });
          });
          scrollMarkers.sort(function (a, b) {
            return a.section.offsetTop - b.section.offsetTop;
          });

          var contextSection =
            document.querySelector(
              ".page-colendar .project-context:not(.project-context--colendar-summary):not(.project-context--colendar-key-achievements)"
            ) ||
            document.querySelector(".project-context");

          var titleAlign = document.querySelector(".page-colendar #colendar-lead-heading");

          function alignTocToTitleLeft() {
            if (!titleAlign || window.matchMedia("(max-width: 1200px)").matches) {
              toc.style.left = "";
              return;
            }
            var rect = titleAlign.getBoundingClientRect();
            toc.style.left = Math.round(rect.left) + "px";
          }

          function updateTocVisibility() {
            if (!contextSection) return;
            var thresholdY = contextSection.offsetTop - 120;
            toc.classList.toggle("is-visible", window.scrollY >= thresholdY);
          }

          function setActive(id) {
            sections.forEach(function (item) {
              var ids = item.groupIds && item.groupIds.length ? item.groupIds : [item.id];
              item.link.classList.toggle("is-active", ids.indexOf(id) !== -1);
            });
          }

          function updateActiveByScroll() {
            var probeY = window.scrollY + Math.max(120, window.innerHeight * 0.3);
            var current = scrollMarkers[0];
            scrollMarkers.forEach(function (marker) {
              if (marker.section.offsetTop <= probeY) current = marker;
            });
            if (current) setActive(current.id);
          }

          alignTocToTitleLeft();
          updateTocVisibility();
          updateActiveByScroll();

          __onLoad( function () {
            alignTocToTitleLeft();
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
            alignTocToTitleLeft();
            updateTocVisibility();
            updateActiveByScroll();
          });

          document.addEventListener("site-language-changed", function () {
            alignTocToTitleLeft();
            updateTocVisibility();
          });
        })();

        (function initColendarScrollVideos() {
          var videos = document.querySelectorAll(".colendar-next-block__video");
          if (!videos.length) return;

          var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          if (prefersReducedMotion) return;

          function ensureVideoSrc(video) {
            var deferred = video.getAttribute("data-src");
            if (!deferred || video.getAttribute("src")) return;
            video.src = deferred;
            video.removeAttribute("data-src");
            video.load();
          }

          function tryPlay(video) {
            ensureVideoSrc(video);
            var playPromise = video.play();
            if (playPromise && playPromise.catch) {
              playPromise.catch(function () {});
            }
          }

          videos.forEach(function (video) {
            video.muted = true;
            video.loop = true;
            video.setAttribute("playsinline", "");

            if (
              video.classList.contains("colendar-next-block__video--template") ||
              video.classList.contains("colendar-next-block__video--chat")
            ) {
              function applyRate() {
                video.playbackRate = 1.4;
              }
              applyRate();
              video.addEventListener("loadedmetadata", applyRate);
            }
          });

          var io = new IntersectionObserver(
            function (entries) {
              entries.forEach(function (entry) {
                var video = entry.target;
                if (entry.isIntersecting) {
                  tryPlay(video);
                } else {
                  video.pause();
                }
              });
            },
            { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
          );

          videos.forEach(function (video) {
            io.observe(video);
          });

          document.addEventListener("visibilitychange", function () {
            if (document.hidden) {
              videos.forEach(function (video) {
                video.pause();
              });
              return;
            }
            videos.forEach(function (video) {
              var rect = video.getBoundingClientRect();
              var inView = rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.08;
              if (inView) tryPlay(video);
            });
          });
        })();

        // ported: the hi-fi prototype slider is now the shadcn Carousel (HiFiCarousel).
}
