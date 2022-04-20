import { getCartCount } from "../utilities/shoppingCart.js";

function countInit() {
  window.addEventListener("storage", () => updateCount());
  updateCount();
}

function updateCount() {
  const cartCount = document.getElementById("page-header-cart-count");
  cartCount.innerHTML = getCartCount();
}

export { updateCount, countInit };
