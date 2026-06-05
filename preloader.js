(function () {
  var CHAR_STAGGER_MS = 32;
  var CHAR_DURATION_MS = 500;
  var HOLD_AFTER_LAST_MS = 320;
  var PRELOADER_FADE_MS = 600;

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function finishImmediately(preloader) {
    document.body.classList.remove("is-preloading");
    document.body.classList.add("is-preloader-reveal");
    if (preloader && preloader.parentNode) {
      preloader.parentNode.removeChild(preloader);
    }
    var overlay = document.querySelector(".page-transition-overlay");
    if (overlay) {
      overlay.classList.add("is-hidden");
    }
  }

  function splitSentence(container, text) {
    var lines = text.split("\n");
    var charIndex = 0;

    lines.forEach(function (line, lineIndex) {
      if (lineIndex > 0) {
        container.appendChild(document.createElement("br"));
      }

      Array.from(line).forEach(function (char) {
        var wrap = document.createElement("span");
        wrap.className = "preloader__char-wrap";

        var span = document.createElement("span");
        span.className = "preloader__char";
        span.style.setProperty("--char-index", String(charIndex));
        span.textContent = char === " " ? "\u00a0" : char;

        wrap.appendChild(span);
        container.appendChild(wrap);
        charIndex += 1;
      });
    });

    return charIndex;
  }

  function init() {
    var preloader = document.getElementById("preloader");
    if (!preloader) return;

    var sentenceEl = preloader.querySelector("[data-preloader-sentence]");
    if (!sentenceEl) return;

    var overlay = document.querySelector(".page-transition-overlay");
    if (overlay) {
      overlay.classList.add("is-hidden");
    }

    if (prefersReducedMotion()) {
      finishImmediately(preloader);
      return;
    }

    var text = sentenceEl.getAttribute("data-preloader-sentence") || sentenceEl.textContent.trim();
    sentenceEl.textContent = "";
    var charCount = splitSentence(sentenceEl, text);

    if (!charCount) {
      finishImmediately(preloader);
      return;
    }

    var chars = sentenceEl.querySelectorAll(".preloader__char");
    var lastChar = chars[chars.length - 1];
    var totalRevealMs = (charCount - 1) * CHAR_STAGGER_MS + CHAR_DURATION_MS;
    var exitTimer = null;
    var hasExited = false;

    function exitPreloader() {
      if (hasExited) return;
      hasExited = true;
      if (exitTimer) {
        window.clearTimeout(exitTimer);
      }

      preloader.classList.add("is-exiting");
      document.body.classList.remove("is-preloading");
      document.body.classList.add("is-preloader-reveal");

      window.setTimeout(function () {
        if (preloader.parentNode) {
          preloader.parentNode.removeChild(preloader);
        }
      }, PRELOADER_FADE_MS + 80);
    }

    if (lastChar) {
      lastChar.addEventListener(
        "animationend",
        function () {
          window.setTimeout(exitPreloader, HOLD_AFTER_LAST_MS);
        },
        { once: true }
      );
    }

    exitTimer = window.setTimeout(function () {
      exitPreloader();
    }, totalRevealMs + HOLD_AFTER_LAST_MS + 120);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
