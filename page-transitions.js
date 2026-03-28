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
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, "", url.pathname + url.search + url.hash);
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

  function init() {
    enter();
    document.addEventListener("click", onDocClick);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
