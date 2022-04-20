import { displayCheckout } from "../displays/displayCheckout.js";
import { displayDropdown } from "../displays/displayDropdown.js";
import { clearCart } from "../utilities/shoppingCart.js";

const dropdown = document.getElementById("cart-dropdown");

const enterFunc = () => {
  displayDropdown();
  dropdown.style.display = "inline";
};

const leaveFunc = () => {
  dropdown.style.display = "none";
};

function handleCartHover() {
  dropdown.addEventListener("mouseenter", enterFunc);
  dropdown.addEventListener("mouseleave", leaveFunc);

  const cart = document.getElementById("cart");
  cart.addEventListener("mouseenter", enterFunc);
  cart.addEventListener("mouseleave", leaveFunc);

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
