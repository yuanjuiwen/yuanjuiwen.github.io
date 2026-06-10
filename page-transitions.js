(function () {
  var DURATION_MS = 300;

  function getOverlay() {
    var el = document.querySelector(".page-transition-overlay");
    if (!el) {
      el = document.createElement("div");
      el.className = "page-transition-overlay";
      el.setAttribute("aria-hidden", "true");
      document.body.insertBefore(el, document.body.firstChild);
    }
    return el;
  }

  function enter() {
    var overlay = getOverlay();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      overlay.classList.add("is-hidden");
      return;
    }
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        overlay.classList.add("is-hidden");
      });
    });
  }

  var HOME_RETURN_KEY = "home_left_for_subpage";

  function samePath(aPath, bPath) {
    var norm = function (p) {
      if (!p || p === "/") return "index.html";
      var f = p.split("/").pop() || "index.html";
      return f;
    };
    return norm(aPath) === norm(bPath);
  }

  function isHomePath(pathname) {
    return samePath(pathname, "index.html");
  }

  function markHomeLeftForSubpage() {
    try {
      sessionStorage.setItem(HOME_RETURN_KEY, "1");
    } catch (e) {
      /* no-op */
    }
  }

  function onDocClick(e) {
    var a = e.target.closest("a[href]");
    if (!a) return;
    if (a.target === "_blank" || a.hasAttribute("download")) return;

    var raw = a.getAttribute("href");
    if (raw == null || raw.trim() === "") return;
    raw = raw.trim();
    if (raw.startsWith("mailto:") || raw.startsWith("tel:") || raw.startsWith("javascript:")) return;

    var url;
    try {
      url = new URL(a.href);
    } catch (err) {
      return;
    }
    if (url.origin !== window.location.origin) return;

    if (raw.startsWith("#")) {
      if (raw.length > 1) {
        var id = raw.slice(1);
        var target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          var smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          target.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
        }
      }
      return;
    }

    var here = window.location.pathname;
    if (samePath(url.pathname, here) && url.hash && !url.search) {
      var hid = url.hash.slice(1);
      var dest = hid ? document.getElementById(hid) : null;
      if (dest) {
        e.preventDefault();
        var smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        dest.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
        // Use pushState (not replaceState) so the browser back button can undo
        // in-page section changes instead of leaving no history entry to pop.
        if (window.location.hash !== url.hash && window.history && window.history.pushState) {
          window.history.pushState(null, "", url.pathname + url.search + url.hash);
        }
      }
      return;
    }

    e.preventDefault();
    if (isHomePath(window.location.pathname) && !isHomePath(url.pathname)) {
      markHomeLeftForSubpage();
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.location.href = a.href;
      return;
    }
    var overlay = getOverlay();
    overlay.classList.remove("is-hidden");
    window.setTimeout(function () {
      window.location.href = a.href;
    }, DURATION_MS);
  }

  function onPopState() {
    var hash = window.location.hash ? window.location.hash.slice(1) : "";
    var smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (hash) {
      var el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
  }

  function resetOverlayBeforeBfcache(e) {
    // Before the page is frozen for the back-forward cache, hide the transition
    // overlay. Otherwise a snapshot may be taken mid-transition (white layer
    // visible) and "back" restores a blank-looking page.
    if (!e.persisted) return;
    var overlay = document.querySelector(".page-transition-overlay");
    if (overlay) overlay.classList.add("is-hidden");
  }

  function onPageShow(e) {
    if (e.persisted) enter();
  }

  var prefetchedAssets = new Set();
  var HERO_PREFETCH = {
    "project-colendar.html": ["assets/smartphone-mockup.webp"],
    "project-oculus-main.html": ["assets/oculus_portfolio_main.webp"],
    "project-lifebuoy.html": ["assets/lifebuoy.webp"],
    "project-tjoy.html": ["assets/Tcard__1.webp"],
    "project_karman_line.html": ["assets/karman_1.webp"],
    "project-eyezen-main.html": ["assets/Mockup_1.webp"],
    "about.html": ["assets/About_P1.webp"],
  };

  function prefetchImage(url) {
    if (!url || prefetchedAssets.has(url)) return;
    prefetchedAssets.add(url);
    var link = document.createElement("link");
    link.rel = "prefetch";
    link.as = "image";
    link.href = url;
    document.head.appendChild(link);
  }

  function prefetchProjectHero(pathname) {
    var file = pathname.split("/").pop() || "";
    var assets = HERO_PREFETCH[file];
    if (!assets) return;
    for (var i = 0; i < assets.length; i++) {
      prefetchImage(assets[i]);
    }
  }

  function onLinkIntent(e) {
    var a = e.target.closest("a[href]");
    if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
    var url;
    try {
      url = new URL(a.href);
    } catch (err) {
      return;
    }
    if (url.origin !== window.location.origin) return;
    prefetchProjectHero(url.pathname);
  }

  function init() {
    enter();
    document.addEventListener("click", onDocClick);
    document.addEventListener("mouseover", onLinkIntent);
    document.addEventListener("focusin", onLinkIntent);
    window.addEventListener("popstate", onPopState);
    window.addEventListener("pagehide", resetOverlayBeforeBfcache);
    window.addEventListener("pageshow", onPageShow);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/** Bottom-fixed project TOCs: shrink link typography / spacing so everything fits (no inner scroll). */
(function () {
  var MQ_HIDE = "(max-width: 1200px)";

  function topGuardPx() {
    var pt = parseFloat(getComputedStyle(document.body).paddingTop);
    if (isNaN(pt) || pt < 1) return 96;
    return Math.round(pt + 6);
  }

  function fitDockedTocAside(toc) {
    if (!toc) return;
    var nav = toc.querySelector("nav");
    if (!nav) return;
    var links = nav.querySelectorAll("a");

    function clearOverrides() {
      nav.style.fontSize = "";
      nav.style.gap = "";
      nav.style.padding = "";
      for (var i = 0; i < links.length; i++) {
        links[i].style.fontSize = "";
        links[i].style.paddingTop = "";
        links[i].style.paddingBottom = "";
      }
    }

    if (window.matchMedia(MQ_HIDE).matches) {
      clearOverrides();
      return;
    }

    clearOverrides();

    var guard = topGuardPx();
    var r = toc.getBoundingClientRect();
    var avail = Math.max(64, r.bottom - guard - 4);
    if (toc.offsetHeight <= avail) return;

    var comp0 = links[0] ? getComputedStyle(links[0]) : getComputedStyle(nav);
    var startFs = parseFloat(comp0.fontSize);
    if (isNaN(startFs)) startFs = 12.48;

    var fs;
    var k;
    for (fs = startFs - 0.5; fs >= 9; fs -= 0.5) {
      for (k = 0; k < links.length; k++) links[k].style.fontSize = fs + "px";
      if (toc.offsetHeight <= avail) return;
    }

    nav.style.gap = "0.12rem";
    if (toc.offsetHeight <= avail) return;

    nav.style.padding = "0.4rem 0.3rem";
    for (fs = 9; fs >= 7.5; fs -= 0.5) {
      for (k = 0; k < links.length; k++) links[k].style.fontSize = fs + "px";
      if (toc.offsetHeight <= avail) return;
    }

    for (k = 0; k < links.length; k++) {
      links[k].style.paddingTop = "0.18rem";
      links[k].style.paddingBottom = "0.18rem";
    }
    for (fs = 7.5; fs >= 7; fs -= 0.5) {
      for (k = 0; k < links.length; k++) links[k].style.fontSize = fs + "px";
      if (toc.offsetHeight <= avail) return;
    }
  }

  function initDockedTocFit() {
    var raf = null;
    function tick() {
      var docks = document.querySelectorAll(".toc--dock-bottom");
      for (var i = 0; i < docks.length; i++) fitDockedTocAside(docks[i]);
    }
    function schedule() {
      if (raf != null) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        raf = null;
        tick();
      });
    }

    if (!document.querySelector(".toc--dock-bottom")) return;

    tick();
    window.addEventListener("resize", schedule, { passive: true });
    window.addEventListener("load", schedule);
    document.addEventListener("site-language-changed", schedule);
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", schedule);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDockedTocFit);
  } else {
    initDockedTocFit();
  }
})();

/** Deferred videos: load/play only when scrolled into view (home cards + project demos). */
(function () {
  function ensureVideoSrc(video) {
    var deferred = video.getAttribute("data-src");
    if (!deferred || video.getAttribute("src")) return;
    video.src = deferred;
    video.removeAttribute("data-src");
    video.load();
  }

  function tryPlay(video) {
    if (!video || video.tagName !== "VIDEO") return;
    ensureVideoSrc(video);
    video.play().catch(function () {});
  }

  function isVideoInView(video) {
    var rect = video.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < window.innerHeight;
  }

  function initLazyVideos() {
    var videos = document.querySelectorAll("video[data-src]:not(.colendar-next-block__video)");
    if (!videos.length) return;

    var io = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          var video = entries[i].target;
          if (entries[i].isIntersecting) {
            tryPlay(video);
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px" }
    );

    for (var j = 0; j < videos.length; j++) {
      var v = videos[j];
      if (v.autoplay) {
        v.muted = true;
        v.loop = true;
        v.setAttribute("playsinline", "");
      }
      v.preload = "none";
      io.observe(v);
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) return;
      for (var k = 0; k < videos.length; k++) {
        if (isVideoInView(videos[k])) tryPlay(videos[k]);
      }
    });

    window.addEventListener("pageshow", function (e) {
      if (!e.persisted) return;
      for (var p = 0; p < videos.length; p++) {
        if (isVideoInView(videos[p])) tryPlay(videos[p]);
      }
    });
  }

  function scheduleLazyVideos() {
    if (
      document.body.classList.contains("is-preloading") ||
      document.body.classList.contains("is-preloader-settling")
    ) {
      document.addEventListener("home-intro-complete", scheduleLazyVideos, { once: true });
      return;
    }
    initLazyVideos();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleLazyVideos);
  } else {
    scheduleLazyVideos();
  }
})();

/** Light / dark theme (localStorage `site_theme`: light | dark). */
(function () {
  var KEY = "site_theme";

  function setMetaTheme(light) {
    var tcDark = document.getElementById("themeColorDark");
    var tcLight = document.getElementById("themeColorLight");
    if (!tcDark || !tcLight) return;
    if (light) {
      tcDark.media = "not all";
      tcLight.media = "(max-width: 99999px)";
    } else {
      tcDark.media = "(max-width: 99999px)";
      tcLight.media = "not all";
    }
  }

  function applyTheme(dark) {
    document.documentElement.classList.toggle("dark-mode", dark);
    document.body.classList.toggle("dark-mode", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    setMetaTheme(!dark);

    try {
      window.localStorage.setItem(KEY, dark ? "dark" : "light");
    } catch (e) {
      /* no-op */
    }

    var btn = document.getElementById("themeToggle");
    if (btn) {
      var moon = btn.querySelector(".theme-toggle__moon");
      var sun = btn.querySelector(".theme-toggle__sun");
      if (moon) moon.style.display = dark ? "none" : "";
      if (sun) sun.style.display = dark ? "" : "none";
      btn.setAttribute("aria-pressed", dark ? "true" : "false");
    }
  }

  function initThemeToggle() {
    var btn = document.getElementById("themeToggle");
    if (!btn) return;

    var dark = false;
    try {
      dark = window.localStorage.getItem(KEY) === "dark";
    } catch (e) {
      dark = false;
    }
    applyTheme(dark);

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.documentElement.classList.add("theme-ready");
        document.body.classList.add("theme-ready");
      });
    });

    btn.addEventListener("click", function () {
      applyTheme(!document.documentElement.classList.contains("dark-mode"));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
