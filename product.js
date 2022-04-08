import { header, updateCartItems } from "./components/header.js";
import { mainProduct } from "./components/main.js";
import footer from "./components/footer.js";

function product() {
  const pageWrapper = document.createElement("div");
  pageWrapper.className = "page-wrapper";

  const pageContentContainer = document.createElement("div");
  pageContentContainer.className = "page-content-container";
  pageWrapper.appendChild(pageContentContainer);

  pageContentContainer.appendChild(header());
  pageContentContainer.appendChild(mainProduct());
  pageContentContainer.appendChild(footer());
  return pageWrapper;
}

document.body.appendChild(product());
