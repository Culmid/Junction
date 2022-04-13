import { displayCheckout } from "./displayCheckout.js";
import { displayDropdown } from "./displayDropdown.js";
import { clearCart } from "./shoppingCart.js";

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

    // On Checkout Page -> Synchronous Update
    if (window.location.pathname.includes("checkout.html")) {
      displayCheckout();
    }
  });
}

export { handleCartHover };
