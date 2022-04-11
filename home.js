import { header, updateCartItems } from "./components/header.js";
import { mainHome } from "./components/main.js";
import footer from "./components/footer.js";
import { fetchProducts } from "./components/util.js";

let cartItems = 0;
const changeCartItems = (change) => {
  cartItems += change;
  updateCartItems(cartItems);
};

async function home() {
  const data = await fetchProducts();
  return renderHome(data);
}

function renderHome(data) {
  const pageWrapper = document.createElement("div");
  pageWrapper.className = "page-wrapper";

  const pageContentContainer = document.createElement("div");
  pageContentContainer.className = "page-content-container";
  pageWrapper.appendChild(pageContentContainer);

  pageContentContainer.appendChild(header());
  pageContentContainer.appendChild(mainHome(data, changeCartItems));
  pageContentContainer.appendChild(footer());

  return pageWrapper;
}

// Option 1
document.body.appendChild(await home());

// Option 2
// home().then((homeElement) => document.body.appendChild(homeElement));
