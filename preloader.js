(function () {
  var HOME_RETURN_KEY = "home_left_for_subpage";
  var userHasScrolled = false;

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  function markUserScrolled() {
    userHasScrolled = true;
  }

  function resetScrollPosition(force) {
    if (!force && userHasScrolled) return;
    if (!force && (window.scrollY > 2 || document.documentElement.scrollTop > 2)) return;
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  function initScrollGuards() {
    window.addEventListener("scroll", markUserScrolled, { passive: true });
    window.addEventListener("wheel", markUserScrolled, { passive: true });
    window.addEventListener("touchmove", markUserScrolled, { passive: true });
  }

  initScrollGuards();

  function isHomePath(pathname) {
    var file = (pathname || "").split("/").pop() || "index.html";
    return file === "" || file === "index.html";
  }

  function shouldSkipIntro() {
    try {
      if (sessionStorage.getItem(HOME_RETURN_KEY) === "1") {
        return true;
      }
    } catch (e) {
      /* no-op */
    }

    var ref = document.referrer;
    if (!ref) return false;

    try {
      var refUrl = new URL(ref);
      if (refUrl.origin !== window.location.origin) return false;
      return isHomePath(window.location.pathname) && !isHomePath(refUrl.pathname);
    } catch (err) {
      return false;
    }
  }

  function clearHomeReturnFlag() {
    try {
      sessionStorage.removeItem(HOME_RETURN_KEY);
    } catch (e) {
      /* no-op */
    }
  }

  function dispatchHomeIntroComplete() {
    document.dispatchEvent(new CustomEvent("home-intro-complete"));
  }

  function syncHeroLayoutToCards() {
    var grid = document.querySelector("#work .projects-grid") || document.querySelector(".projects-grid");
    var anchor =
      document.querySelector(".projects-grid .project-card .project-image") ||
      document.getElementById("home-hero");

    if (anchor) {
      var left = anchor.getBoundingClientRect().left;
      document.documentElement.style.setProperty("--home-hero-inset-left", Math.max(0, left) + "px");
    }

    if (grid) {
      var width = grid.getBoundingClientRect().width;
      if (width > 0) {
        document.documentElement.style.setProperty("--home-hero-max-width", width + "px");
      }
    }
  }

  var WORD_STAGGER_MS = 36;
  var WORD_DURATION_MS = 340;
  var HOLD_AFTER_LAST_MS = 280;
  var SETTLE_MS = 600;
  var MOBILE_SETTLE_MS = 360;
  var NAV_TOOLS_REVEAL_MS = 180;
  var NAV_BRAND_REVEAL_MS = 300;
  var CURRENTLY_REVEAL_MS = 200;
  var CONTENT_STAGGER_MS = 50;

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  var AWAIT_REVEAL_SELECTOR =
    ".home-currently, .project-card, .projects-section .section-heading, .playground-section .section-heading, .section-divider, .site-footer";
  var NAV_AWAIT_REVEAL_SELECTOR = ".navbar-tools, .brand";

  function revealAllContent() {
    document.querySelectorAll(AWAIT_REVEAL_SELECTOR).forEach(function (el) {
      el.classList.remove("intro-await-reveal", "intro-reveal-visible");
    });
    document.querySelectorAll(NAV_AWAIT_REVEAL_SELECTOR).forEach(function (el) {
      el.classList.remove("intro-nav-await", "intro-nav-visible");
    });
  }

  function finalizeIntroReveal(el) {
    var cleaned = false;

    function cleanup(event) {
      if (cleaned) return;
      if (event && event.propertyName !== "opacity") return;
      cleaned = true;
      el.removeEventListener("transitionend", cleanup);
      el.classList.remove("intro-await-reveal", "intro-reveal-visible");
    }

    el.addEventListener("transitionend", cleanup);
    window.setTimeout(cleanup, 520);
  }

  function revealElementWithFade(el) {
    if (!el || !el.classList.contains("intro-await-reveal")) return;
    el.classList.add("intro-reveal-visible");
    finalizeIntroReveal(el);
  }

  function revealHeroCurrently() {
    var currently = document.querySelector(".home-currently");
    window.setTimeout(function () {
      revealElementWithFade(currently);
      dispatchHomeIntroComplete();
    }, CURRENTLY_REVEAL_MS);
  }

  function initScrollReveal() {
    var targets = document.querySelectorAll(
      ".projects-section .section-heading, .project-card, .playground-section .section-heading, .site-footer"
    );

    if (!targets.length) return;

    if (!window.IntersectionObserver || prefersReducedMotion()) {
      targets.forEach(function (el) {
        el.classList.remove("intro-await-reveal");
        el.classList.add("intro-reveal-visible");
      });
      return;
    }

    var pendingReveals = [];
    var revealScheduled = false;
    var staggerIndex = 0;

    function flushReveals() {
      revealScheduled = false;
      var batch = pendingReveals.splice(0);
      batch.forEach(function (el) {
        var delay = staggerIndex * (isMobileViewport() ? 55 : 65);
        staggerIndex += 1;
        window.setTimeout(function () {
          revealElementWithFade(el);
        }, delay);
      });
    }

    function scheduleReveal(el) {
      pendingReveals.push(el);
      if (revealScheduled) return;
      revealScheduled = true;
      window.requestAnimationFrame(flushReveals);
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          scheduleReveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  function skipHomeIntro(preloader) {
    clearHomeReturnFlag();
    document.documentElement.classList.remove("skip-home-intro");
    detachPreloaderResize();
    document.body.classList.remove("is-preloading", "is-preloader-settling");
    document.body.classList.add("is-preloader-reveal");
    revealAllContent();

    if (preloader && preloader.parentNode) {
      preloader.parentNode.removeChild(preloader);
    }

    var overlay = document.querySelector(".page-transition-overlay");
    if (overlay) {
      overlay.classList.add("is-hidden");
    }

    window.requestAnimationFrame(syncHeroLayoutToCards);
    enableHeroLanding();
    dispatchHomeIntroComplete();
  }

  function finishImmediately(preloader) {
    skipHomeIntro(preloader);
  }

  function isMobileViewport() {
    return window.matchMedia("(max-width: 700px)").matches;
  }

  function constrainPreloaderContent(contentEl) {
    if (!contentEl) return;
    contentEl.style.maxWidth = "";
  }

  function markAwaitReveal() {
    document.querySelectorAll(AWAIT_REVEAL_SELECTOR).forEach(function (el) {
      el.classList.add("intro-await-reveal");
    });
    document.querySelectorAll(NAV_AWAIT_REVEAL_SELECTOR).forEach(function (el) {
      el.classList.add("intro-nav-await");
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
    el.style.opacity = "";
  }

  function beginHeroIntroLayout() {
    document.body.classList.add("home-hero-landing", "home-hero-settling");
  }

  function removePreloader(preloader, contentEl) {
    detachPreloaderResize();
    clearMotionStyles(contentEl);
    if (preloader && preloader.parentNode) {
      preloader.parentNode.removeChild(preloader);
    }
  }

  var scrollHintBound = false;

  function enableHeroLanding() {
    document.body.classList.add("home-hero-landing");
    initScrollHint();
  }

  function initScrollHint() {
    if (scrollHintBound) return;
    scrollHintBound = true;

    var hint = document.querySelector(".home-scroll-hint");

    function onScroll() {
      if (window.scrollY > 24) {
        document.body.classList.add("home-has-scrolled");
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    if (hint) {
      hint.addEventListener("click", function () {
        var target = document.getElementById("work");
        if (!target) return;
        target.scrollIntoView({
          behavior: prefersReducedMotion() ? "auto" : "smooth",
          block: "start",
        });
      });
    }
  }

  function updateHeroLandingState() {
    if (!isMobileViewport()) return;
    document.body.classList.remove("home-has-scrolled");
  }

  function completeSettle(preloader, contentEl) {
    if (preloader && preloader.style) {
      preloader.style.transition = "";
      preloader.classList.remove("is-handoff");
    }
    removePreloader(preloader, contentEl);
    document.body.classList.remove("is-preloader-settling", "is-preloading", "home-hero-settling");
    document.body.classList.add("is-preloader-reveal");

    scheduleProgressiveReveal();
    revealHeroCurrently();
    initScrollReveal();

    enableHeroLanding();
  }

  function settleToHomeFade(preloader, contentEl) {
    var homeHero = document.getElementById("home-hero");

    if (!homeHero) {
      finishImmediately(preloader);
      return;
    }

    beginHeroIntroLayout();

    document.body.classList.remove("is-preloading");
    document.body.classList.add("is-preloader-settling");
    preloader.classList.add("is-settling", "is-handoff");

    scheduleProgressiveReveal();

    window.requestAnimationFrame(function () {
      var rect = homeHero.getBoundingClientRect();

      contentEl.style.position = "fixed";
      contentEl.style.top = rect.top + "px";
      contentEl.style.left = rect.left + "px";
      contentEl.style.width = rect.width + "px";
      contentEl.style.maxWidth = rect.width + "px";
      contentEl.style.margin = "0";
      contentEl.style.zIndex = "2147483002";
      contentEl.style.transform = "none";
      contentEl.style.transition = "opacity " + MOBILE_SETTLE_MS + "ms ease";

      window.requestAnimationFrame(function () {
        contentEl.style.opacity = "0";
      });

      window.setTimeout(function () {
        completeSettle(preloader, contentEl);
      }, MOBILE_SETTLE_MS + 24);
    });
  }

  function settleToHome(preloader, contentEl) {
    settleToHomeFade(preloader, contentEl);
  }

  var onPreloaderResize = null;
  var onHeroLayoutResize = null;

  function initHeroLayoutSync() {
    if (!document.getElementById("home-hero")) return;

    window.requestAnimationFrame(syncHeroLayoutToCards);

    if (onHeroLayoutResize) return;

    var layoutTimer = null;
    onHeroLayoutResize = function () {
      if (layoutTimer) window.clearTimeout(layoutTimer);
      layoutTimer = window.setTimeout(function () {
        syncHeroLayoutToCards();
        updateHeroLandingState();
      }, 120);
    };
    window.addEventListener("resize", onHeroLayoutResize);
  }

  function detachPreloaderResize() {
    if (!onPreloaderResize) return;
    window.removeEventListener("resize", onPreloaderResize);
    onPreloaderResize = null;
  }

  function init() {
    var preloader = document.getElementById("preloader");
    if (!document.getElementById("home-hero")) return;

    initHeroLayoutSync();

    if (!preloader) return;

    var contentEl = preloader.querySelector(".preloader__content");
    var titleEl = preloader.querySelector(".preloader__title");
    var introEl = preloader.querySelector(".preloader__intro");
    if (!contentEl || !titleEl || !introEl) return;

    var overlay = document.querySelector(".page-transition-overlay");
    if (overlay) {
      overlay.classList.add("is-hidden");
    }

    if (shouldSkipIntro() || prefersReducedMotion()) {
      skipHomeIntro(preloader);
      return;
    }

    beginHeroIntroLayout();
    markAwaitReveal();
    resetScrollPosition(true);
    window.requestAnimationFrame(function () {
      syncHeroLayoutToCards();
      constrainPreloaderContent(contentEl);
    });

    var resizeTimer = null;
    onPreloaderResize = function () {
      if (resizeTimer) window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(function () {
        syncHeroLayoutToCards();
        if (contentEl.isConnected) {
          constrainPreloaderContent(contentEl);
        }
      }, 120);
    };
    window.addEventListener("resize", onPreloaderResize);

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

  window.addEventListener("pageshow", function (event) {
    if (!event.persisted) return;
    userHasScrolled = false;
    if (shouldSkipIntro()) {
      skipHomeIntro(document.getElementById("preloader"));
      return;
    }
    resetScrollPosition(true);
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
