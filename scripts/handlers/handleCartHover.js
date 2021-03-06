import { displayCheckout } from "../displays/displayCheckout.js";
import { displayDropdown } from "../displays/displayDropdown.js";
import { clearCart } from "../utilities/shoppingCart.js";

/**
 * Setup event listeners for the hover over shopping cart icon
 */
function handleCartHover() {
  const dropdown = document.getElementById("cart-dropdown");
  dropdown.addEventListener("mouseenter", () => {
    dropdown.style.display = "inline";
  });
  dropdown.addEventListener("mouseleave", () => {
    dropdown.style.display = "none";
  });

  const cart = document.getElementById("cart");
  cart.addEventListener("mouseenter", () => {
    displayDropdown();
    dropdown.style.display = "inline";
  });
  cart.addEventListener("mouseleave", () => {
    dropdown.style.display = "none";
  });

  const clear = document.getElementById("clear-cart");
  clear.addEventListener("click", () => {
    clearCart();
    displayDropdown();

    if (window.location.pathname.includes("checkout.html")) {
      displayCheckout();
    }
  });
}

export { handleCartHover };
