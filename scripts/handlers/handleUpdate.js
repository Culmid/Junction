import { getCartCount } from "../utilities/shoppingCart.js";

/**
 * Update all Dynamic Values -> Dropdown, Checkout, Count
 */
function updateAll() {
  // Might be duplicated
  window.addEventListener("storage", () => updateCount());

  updateCount();
}

function updateCount() {
  const cartCount = document.getElementById("page-header-cart-count");
  cartCount.innerHTML = getCartCount();
}

export { updateAll };
