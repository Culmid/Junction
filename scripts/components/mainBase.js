function mainBase() {
  const main = document.createElement("main");

  main.appendChild(imageBanner());

  const mainContent = document.createElement("div");
  mainContent.className = "main-content-container";
  mainContent.id = "display-container";
  main.appendChild(mainContent);

  return main;
}

function imageBanner() {
  const imageBanner = document.createElement("div");
  imageBanner.className = "image-banner";

  const imageBannerMessage = document.createElement("div");
  imageBannerMessage.className = "image-banner-message";
  imageBannerMessage.innerHTML = "30% off all Winter stock";
  imageBanner.appendChild(imageBannerMessage);

  return imageBanner;
}

export { mainBase };
