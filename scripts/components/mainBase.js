/**
 * Generate the general main element.
 * @returns HTMLElement containing main element.
 */
function mainBase() {
  const main = document.createElement("main");

  main.appendChild(imageBanner());

  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content-container");
  mainContent.id = "display-container";
  main.appendChild(mainContent);

  return main;
}

/**
 * Generate the image banner for the main element.
 * @returns HTMLElement containing the image banner.
 */
function imageBanner() {
  const imageBanner = document.createElement("div");
  imageBanner.classList.add("image-banner");

  const imageBannerMessage = document.createElement("div");
  imageBannerMessage.classList.add("image-banner-message");
  imageBannerMessage.innerHTML = "30% off all Winter stock";
  imageBanner.appendChild(imageBannerMessage);

  return imageBanner;
}

export { mainBase };
