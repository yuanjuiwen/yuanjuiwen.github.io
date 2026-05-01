/* global window, document, fetch, localStorage */
(function () {
  var STORAGE_KEY = "site_lang";
  var DEFAULT_LANG = "en";
  var SUPPORTED = ["en", "zh-Hant"];
  var cache = {};
  var currentLang = DEFAULT_LANG;

  function isSupported(lang) {
    return SUPPORTED.indexOf(lang) !== -1;
  }

  function normalizeLang(lang) {
    if (!lang) return DEFAULT_LANG;
    if (lang === "zh" || lang.toLowerCase() === "zh-hant" || lang.toLowerCase() === "zh-tw") return "zh-Hant";
    if (lang.toLowerCase().indexOf("en") === 0) return "en";
    return isSupported(lang) ? lang : DEFAULT_LANG;
  }

  function detectInitialLang() {
    // Keep initial render stable: language changes only on explicit user action.
    return DEFAULT_LANG;
  }

  function getByPath(obj, path) {
    if (!obj || !path) return undefined;
    var parts = path.split(".");
    var ref = obj;
    for (var i = 0; i < parts.length; i++) {
      if (ref == null) return undefined;
      ref = ref[parts[i]];
    }
    return ref;
  }

  function interpolate(str, params) {
    if (!params) return str;
    return String(str).replace(/\{(\w+)\}/g, function (_, key) {
      return params[key] != null ? String(params[key]) : "";
    });
  }

  function t(key, params) {
    var locale = cache[currentLang] || {};
    var fallback = cache[DEFAULT_LANG] || {};
    var val = getByPath(locale, key);
    if (val == null) val = getByPath(fallback, key);
    if (val == null) return key;
    return interpolate(val, params);
  }

  function applyElementText(el, key, htmlMode) {
    var text = t(key);
    if (htmlMode) {
      el.innerHTML = text;
    } else {
      el.textContent = text;
    }
  }

  function applyTranslations(root) {
    var ctx = root || document;
    var textNodes = ctx.querySelectorAll("[data-i18n]");
    for (var i = 0; i < textNodes.length; i++) {
      applyElementText(textNodes[i], textNodes[i].getAttribute("data-i18n"), false);
    }

    var htmlNodes = ctx.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmlNodes.length; j++) {
      applyElementText(htmlNodes[j], htmlNodes[j].getAttribute("data-i18n-html"), true);
    }

    var attrNodes = ctx.querySelectorAll("[data-i18n-attrs]");
    for (var k = 0; k < attrNodes.length; k++) {
      var raw = attrNodes[k].getAttribute("data-i18n-attrs");
      if (!raw) continue;
      var pairs = raw.split(",");
      for (var p = 0; p < pairs.length; p++) {
        var pair = pairs[p].trim();
        if (!pair) continue;
        var idx = pair.indexOf(":");
        if (idx === -1) continue;
        var attrName = pair.slice(0, idx).trim();
        var attrKey = pair.slice(idx + 1).trim();
        attrNodes[k].setAttribute(attrName, t(attrKey));
      }
    }

    var ariaMap = {
      "Previous image": "common.prevImage",
      "Next image": "common.nextImage",
      "Choose slide": "common.chooseSlide",
      "Previous chart": "common.prevChart",
      "Next chart": "common.nextChart",
      "Choose chart": "common.chooseChart",
      "Social links": "footer.socialLabel",
      "Language switcher": "nav.switcherAria",
      "LinkedIn": "footer.linkedin",
      "Instagram": "footer.instagram"
    };

    var ariaNodes = ctx.querySelectorAll("[aria-label]");
    for (var a = 0; a < ariaNodes.length; a++) {
      var label = ariaNodes[a].getAttribute("aria-label");
      if (!label) continue;
      var key = ariaMap[label];
      if (key) {
        ariaNodes[a].setAttribute("aria-label", t(key));
        continue;
      }
      var slideMatch = label.match(/^Slide\s+(\d+)$/);
      if (slideMatch) {
        ariaNodes[a].setAttribute("aria-label", t("common.slideN", { n: slideMatch[1] }));
        continue;
      }
      var chartMatch = label.match(/^Chart\s+(\d+)$/);
      if (chartMatch) {
        ariaNodes[a].setAttribute("aria-label", t("common.chartN", { n: chartMatch[1] }));
      }
    }

    document.documentElement.lang = currentLang;
    document.documentElement.setAttribute("data-site-lang", currentLang);
    updateSwitcherState();
    document.dispatchEvent(new CustomEvent("site-language-changed", { detail: { lang: currentLang } }));
  }

  function updateSwitcherState() {
    var btns = document.querySelectorAll("[data-lang-switch]");
    for (var i = 0; i < btns.length; i++) {
      var lang = btns[i].getAttribute("data-lang-switch");
      var active = lang === currentLang;
      btns[i].setAttribute("aria-pressed", active ? "true" : "false");
      btns[i].classList.toggle("is-active", active);
    }

    var toggles = document.querySelectorAll("[data-lang-toggle]");
    for (var j = 0; j < toggles.length; j++) {
      var nextKey = currentLang === "en" ? "lang.zhHant" : "lang.en";
      var fallbackLabel = currentLang === "en" ? "中文" : "EN";
      var translated = t(nextKey);
      var targetLabel = translated === nextKey ? fallbackLabel : translated;
      toggles[j].setAttribute("aria-pressed", "true");
      toggles[j].classList.add("is-active");
      toggles[j].textContent = targetLabel;
      toggles[j].setAttribute("aria-label", "Switch language to " + targetLabel);
    }
  }

  function normalizeSwitchers() {
    var groups = document.querySelectorAll(".lang-switcher");
    for (var i = 0; i < groups.length; i++) {
      var options = groups[i].querySelectorAll("[data-lang-switch]");
      if (options.length === 0) continue;
      var toggle = options[0];
      toggle.removeAttribute("data-lang-switch");
      toggle.setAttribute("data-lang-toggle", "");
      for (var j = 1; j < options.length; j++) {
        options[j].remove();
      }
    }
  }

  function fetchLocale(lang) {
    if (cache[lang]) return Promise.resolve(cache[lang]);
    return fetch("locales/" + lang + ".json", { cache: "no-cache" })
      .then(function (res) {
        if (!res.ok) throw new Error("Failed to load locale " + lang);
        return res.json();
      })
      .then(function (json) {
        cache[lang] = json || {};
        return cache[lang];
      });
  }

  function setLanguage(lang) {
    var next = normalizeLang(lang);
    return Promise.all([fetchLocale(DEFAULT_LANG), fetchLocale(next)]).then(function () {
      currentLang = next;
      try {
        localStorage.setItem(STORAGE_KEY, currentLang);
      } catch (e) {
        /* no-op */
      }
      applyTranslations(document);
      return currentLang;
    });
  }

  function initLanguageSwitcher() {
    document.addEventListener("click", function (e) {
      var trigger = e.target.closest("[data-lang-switch]");
      if (trigger) {
        e.preventDefault();
        var lang = trigger.getAttribute("data-lang-switch");
        setLanguage(lang);
        return;
      }

      var toggle = e.target.closest("[data-lang-toggle]");
      if (!toggle) return;
      e.preventDefault();
      setLanguage(currentLang === "en" ? "zh-Hant" : "en");
    });
  }

  function init() {
    normalizeSwitchers();
    initLanguageSwitcher();
    currentLang = detectInitialLang();
    updateSwitcherState();
    document.documentElement.lang = currentLang;
    document.documentElement.setAttribute("data-site-lang", currentLang);
  }

  window.i18n = {
    t: t,
    setLanguage: setLanguage,
    getLanguage: function () {
      return currentLang;
    },
    applyTranslations: applyTranslations
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
