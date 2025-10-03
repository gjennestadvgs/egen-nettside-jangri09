
function setFaviconForColorScheme() {
  const favicon = document.querySelector("link[rel='icon']");
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    favicon.href = "bilder/logo_hvit.png";
  } else {
    favicon.href = "bilder/logo_svart.png";
  }
}
setFaviconForColorScheme();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setFaviconForColorScheme);
