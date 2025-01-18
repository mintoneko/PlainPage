const primaryColorScheme = ""; // "light" | "dark"

// Get theme data from local storage
const currentTheme = localStorage.getItem("theme");
const storedDate = localStorage.getItem("theme-date"); // 存储日期

function getPreferTheme() {
  const today = new Date().toDateString();

  // 如果今天的日期和存储的日期不同，则清除localStorage中的主题
  if (storedDate !== today) {
    localStorage.removeItem("theme");
    localStorage.removeItem("theme-date");
  }

  // 获取存储的主题值
  const currentTheme = localStorage.getItem("theme");

  // 如果有存储的主题，则返回该主题
  if (currentTheme) return currentTheme;

  // 如果没有存储的主题，则返回系统的首选主题
  if (primaryColorScheme) return primaryColorScheme;

  // 检查用户系统的颜色主题偏好
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

let themeValue = getPreferTheme();

function setPreference() {
  localStorage.setItem("theme", themeValue);
  localStorage.setItem("theme-date", new Date().toDateString()); // 存储当前日期
  reflectPreference();
}

function reflectPreference() {
  document.firstElementChild.setAttribute("data-theme", themeValue);

  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);

  const body = document.body;
  if (body) {
    const computedStyles = window.getComputedStyle(body);
    const bgColor = computedStyles.backgroundColor;
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", bgColor);
  }
}

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
  function setThemeFeature() {
    reflectPreference();
    document.querySelector("#theme-btn")?.addEventListener("click", () => {
      themeValue = themeValue === "light" ? "dark" : "light";
      setPreference();
    });
  }

  setThemeFeature();
  document.addEventListener("astro:after-swap", setThemeFeature);
};

// sync with system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    themeValue = isDark ? "dark" : "light";
    setPreference();
  });
