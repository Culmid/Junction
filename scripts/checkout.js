import { displayCheckout } from "./displays/displayCheckout.js";
import { handleCartHover } from "./handlers/handleCartHover.js";
import { countInit } from "./handlers/handleUpdate.js";

/**
 * Run necessary functions to display the checkout page
 */
function checkout() {
  displayCheckout();
  handleCartHover();

  window.addEventListener("storage", () => {
    displayCheckout();
  });

  countInit();
}

checkout();
