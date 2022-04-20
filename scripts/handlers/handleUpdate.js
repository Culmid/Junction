import { getCartCount } from "../utilities/shoppingCart.js";

/**
 * Initialize shopping cart counter
 */
function countInit() {
  window.addEventListener("storage", () => updateCount());
  updateCount();
}

/**
 * Update the shopping cart counter
 */
function updateCount() {
  const cartCount = document.getElementById("page-header-cart-count");
  cartCount.innerHTML = getCartCount();
}

export { updateCount, countInit };
