import { header, updateCartItems } from "./components/header.js";
import { mainProduct } from "./components/main.js";
import footer from "./components/footer.js";
import { fetchProduct } from "./components/util.js";

async function product() {
  // Search id = digits
  const id = window.location.search.match(/id=\d+/)[0].split("=")[1];
  const data = await fetchProduct(id);

  return renderProduct(data);
}

function renderProduct(data) {
  const pageWrapper = document.createElement("div");
  pageWrapper.className = "page-wrapper";

  const pageContentContainer = document.createElement("div");
  pageContentContainer.className = "page-content-container";
  pageWrapper.appendChild(pageContentContainer);

  pageContentContainer.appendChild(header());
  pageContentContainer.appendChild(mainProduct(data));
  pageContentContainer.appendChild(footer());
  return pageWrapper;
}

document.body.appendChild(await product());
