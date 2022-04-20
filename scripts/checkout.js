import { displayCheckout } from "./displays/displayCheckout.js";
import { handleCartHover } from "./handlers/handleCartHover.js";
import { countInit } from "./handlers/handleUpdate.js";
import { constructPage } from "./utilities/constructPage.js";

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

constructPage();
checkout();
