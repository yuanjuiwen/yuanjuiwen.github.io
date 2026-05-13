/* Runs in <head> before paint: restore theme + status bar (pattern inspired by celine-hsieh.github.io). */
(function () {
  var KEY = "site_theme";
  try {
    if (!window.localStorage.getItem(KEY)) {
      window.localStorage.setItem(KEY, "light");
    }
  } catch (e) {
    /* private mode */
  }

  var dark = false;
  try {
    dark = window.localStorage.getItem(KEY) === "dark";
  } catch (e2) {
    dark = false;
  }

  if (dark) {
    document.documentElement.classList.add("dark-mode");
  }
  document.documentElement.style.colorScheme = dark ? "dark" : "light";

  var tcDark = document.getElementById("themeColorDark");
  var tcLight = document.getElementById("themeColorLight");
  if (tcDark && tcLight) {
    if (dark) {
      tcDark.media = "(max-width: 99999px)";
      tcLight.media = "not all";
    } else {
      tcDark.media = "not all";
      tcLight.media = "(max-width: 99999px)";
    }
  }
})();
