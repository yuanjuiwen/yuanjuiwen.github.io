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

  function samePath(aPath, bPath) {
    var norm = function (p) {
      if (!p || p === "/") return "index.html";
      var f = p.split("/").pop() || "index.html";
      return f;
    };
    return norm(aPath) === norm(bPath);
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

  function init() {
    enter();
    document.addEventListener("click", onDocClick);
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
