(function () {
  function resetScrollPosition() {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  resetScrollPosition();
  window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
      resetScrollPosition();
    }
  });
  window.addEventListener("load", resetScrollPosition);

  var WORD_STAGGER_MS = 36;
  var WORD_DURATION_MS = 340;
  var HOLD_AFTER_LAST_MS = 280;
  var SETTLE_MS = 600;
  var NAV_TOOLS_REVEAL_MS = 180;
  var NAV_BRAND_REVEAL_MS = 300;
  var CURRENTLY_REVEAL_MS = 200;
  var SCROLL_REVEAL_START_MS = 300;

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  var AWAIT_REVEAL_SELECTOR =
    ".home-currently, .project-card, .playground-section .section-heading, .section-divider, .site-footer";
  var NAV_AWAIT_REVEAL_SELECTOR = ".navbar-tools, .brand";

  function finishImmediately(preloader) {
    resetScrollPosition();
    document.body.classList.remove("is-preloading", "is-preloader-settling");
    document.body.classList.add("is-preloader-reveal");
    document.querySelectorAll(".intro-await-reveal, .intro-nav-await").forEach(function (el) {
      el.classList.remove("intro-await-reveal", "intro-nav-await");
      el.classList.add("intro-reveal-visible");
    });
    if (preloader && preloader.parentNode) {
      preloader.parentNode.removeChild(preloader);
    }
    var overlay = document.querySelector(".page-transition-overlay");
    if (overlay) {
      overlay.classList.add("is-hidden");
    }
  }

  function isMobileViewport() {
    return window.matchMedia("(max-width: 700px)").matches;
  }

  function syncHeroInsetToCards() {
    var homeHero = document.getElementById("home-hero");
    if (!homeHero) return;

    var left = homeHero.getBoundingClientRect().left;
    document.documentElement.style.setProperty("--home-hero-inset-left", Math.max(0, left) + "px");
  }

  function constrainPreloaderContent(contentEl) {
    if (!contentEl) return;
    var rootStyle = window.getComputedStyle(document.documentElement);
    var insetLeft = parseFloat(rootStyle.getPropertyValue("--home-hero-inset-left")) || 16;
    var rightPad = isMobileViewport() ? 16 : 24;
    var maxWidth = Math.max(220, window.innerWidth - insetLeft - rightPad);
    contentEl.style.maxWidth = maxWidth + "px";
  }

  function markAwaitReveal() {
    document.querySelectorAll(AWAIT_REVEAL_SELECTOR).forEach(function (el) {
      el.classList.add("intro-await-reveal");
    });
    document.querySelectorAll(NAV_AWAIT_REVEAL_SELECTOR).forEach(function (el) {
      el.classList.add("intro-nav-await");
    });
  }

  function revealElements(selector) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.classList.add("intro-reveal-visible");
    });
  }

  function revealNavElements(selector) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.classList.remove("intro-nav-await");
      el.classList.add("intro-nav-visible");

      function cleanup(event) {
        if (event.propertyName !== "opacity") return;
        el.removeEventListener("transitionend", cleanup);
        el.classList.remove("intro-nav-await", "intro-nav-visible");
      }

      el.addEventListener("transitionend", cleanup);
    });
  }

  function initScrollReveal() {
    var targets = document.querySelectorAll(
      ".project-card, .playground-section .section-heading, .section-divider, .site-footer"
    );

    if (!targets.length) return;

    if (!window.IntersectionObserver) {
      targets.forEach(function (el) {
        el.classList.add("intro-reveal-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var delay = Number(el.dataset.revealDelay || 0);
          window.setTimeout(function () {
            el.classList.add("intro-reveal-visible");
          }, delay);
          observer.unobserve(el);
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -24px 0px" }
    );

    targets.forEach(function (el, index) {
      el.dataset.revealDelay = String((index % 6) * (isMobileViewport() ? 50 : 60));
      observer.observe(el);
    });
  }

  function scheduleProgressiveReveal() {
    window.setTimeout(function () {
      revealNavElements(".navbar-tools");
    }, NAV_TOOLS_REVEAL_MS);

    window.setTimeout(function () {
      revealNavElements(".brand");
    }, NAV_BRAND_REVEAL_MS);
  }

  function parsePreloaderText(text) {
    var lines = text.split("\n").map(function (line) {
      return line.trim();
    });
    var title = lines[0] || "";
    var intro = "";

    for (var i = lines.length - 1; i >= 0; i -= 1) {
      if (lines[i]) {
        intro = lines[i];
        break;
      }
    }

    return { title: title, intro: intro };
  }

  function splitWordsBlock(container, text, startIndex) {
    var words = text.trim().split(/\s+/).filter(Boolean);
    var wordIndex = startIndex;

    words.forEach(function (word, index) {
      if (index > 0) {
        container.appendChild(document.createTextNode(" "));
      }

      var span = document.createElement("span");
      span.className = "preloader__word";
      span.style.setProperty("--word-index", String(wordIndex));
      span.textContent = word;
      container.appendChild(span);
      wordIndex += 1;
    });

    return wordIndex;
  }

  function playWordReveal(preloader) {
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        preloader.classList.add("is-animating");
      });
    });
  }

  function animateContentToHero(movingEl, targetEl, duration, callback) {
    var startRect = movingEl.getBoundingClientRect();
    var targetRect = targetEl.getBoundingClientRect();
    var dx = targetRect.left - startRect.left;
    var dy = targetRect.top - startRect.top;

    movingEl.style.position = "fixed";
    movingEl.style.top = startRect.top + "px";
    movingEl.style.left = startRect.left + "px";
    movingEl.style.margin = "0";
    movingEl.style.zIndex = "2147483002";
    movingEl.style.transform = "translate3d(0, 0, 0)";
    movingEl.style.transition = "transform " + duration + "ms cubic-bezier(0.22, 1, 0.36, 1)";
    movingEl.style.willChange = "transform";
    constrainPreloaderContent(movingEl);

    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        movingEl.style.transform = "translate3d(" + dx + "px, " + dy + "px, 0)";
      });
    });

    window.setTimeout(callback, duration + 40);
  }

  function clearMotionStyles(el) {
    if (!el || !el.style) return;
    el.style.position = "";
    el.style.top = "";
    el.style.left = "";
    el.style.margin = "";
    el.style.width = "";
    el.style.zIndex = "";
    el.style.transform = "";
    el.style.transition = "";
    el.style.willChange = "";
    el.style.maxWidth = "";
  }

  function removePreloader(preloader, contentEl) {
    clearMotionStyles(contentEl);
    if (preloader && preloader.parentNode) {
      preloader.parentNode.removeChild(preloader);
    }
  }

  function completeSettle(preloader, contentEl) {
    removePreloader(preloader, contentEl);
    resetScrollPosition();
    document.body.classList.remove("is-preloader-settling");
    document.body.classList.add("is-preloader-reveal");

    window.setTimeout(function () {
      revealElements(".home-currently");
    }, CURRENTLY_REVEAL_MS);

    window.setTimeout(function () {
      initScrollReveal();
    }, SCROLL_REVEAL_START_MS);
  }

  function settleToHome(preloader, contentEl) {
    var homeHero = document.getElementById("home-hero");

    if (!homeHero) {
      finishImmediately(preloader);
      return;
    }

    document.body.classList.remove("is-preloading");
    document.body.classList.add("is-preloader-settling");
    preloader.classList.add("is-settling");

    scheduleProgressiveReveal();

    window.requestAnimationFrame(function () {
      syncHeroInsetToCards();
      constrainPreloaderContent(contentEl);

      window.requestAnimationFrame(function () {
        animateContentToHero(contentEl, homeHero, SETTLE_MS, function () {
          completeSettle(preloader, contentEl);
        });
      });
    });
  }

  function init() {
    var preloader = document.getElementById("preloader");
    if (!preloader) return;

    var contentEl = preloader.querySelector(".preloader__content");
    var titleEl = preloader.querySelector(".preloader__title");
    var introEl = preloader.querySelector(".preloader__intro");
    if (!contentEl || !titleEl || !introEl) return;

    var overlay = document.querySelector(".page-transition-overlay");
    if (overlay) {
      overlay.classList.add("is-hidden");
    }

    markAwaitReveal();
    resetScrollPosition();
    window.requestAnimationFrame(function () {
      syncHeroInsetToCards();
      constrainPreloaderContent(contentEl);
    });

    var resizeTimer = null;
    window.addEventListener("resize", function () {
      if (resizeTimer) window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(function () {
        syncHeroInsetToCards();
        constrainPreloaderContent(contentEl);
      }, 120);
    });

    if (prefersReducedMotion()) {
      finishImmediately(preloader);
      return;
    }

    var text = contentEl.getAttribute("data-preloader-sentence") || "";
    var parsed = parsePreloaderText(text);
    titleEl.textContent = "";
    introEl.textContent = "";

    var wordCount = 0;
    wordCount = splitWordsBlock(titleEl, parsed.title, wordCount);
    wordCount = splitWordsBlock(introEl, parsed.intro, wordCount);

    if (!wordCount) {
      finishImmediately(preloader);
      return;
    }

    playWordReveal(preloader);

    var totalRevealMs = (wordCount - 1) * WORD_STAGGER_MS + WORD_DURATION_MS;
    var exitTimer = null;
    var hasExited = false;

    function exitPreloader() {
      if (hasExited) return;
      hasExited = true;
      if (exitTimer) {
        window.clearTimeout(exitTimer);
      }
      settleToHome(preloader, contentEl);
    }

    exitTimer = window.setTimeout(function () {
      exitPreloader();
    }, totalRevealMs + HOLD_AFTER_LAST_MS);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
