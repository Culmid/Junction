import { displayCheckout } from "./displayCheckout.js";
import { handleCartHover } from "./handleCartHover.js";
import { updateAll } from "./handleUpdate.js";

function checkout() {
  displayCheckout();
  handleCartHover();

  window.addEventListener("storage", () => {
    displayCheckout();
  });

  updateAll();
}

checkout();
