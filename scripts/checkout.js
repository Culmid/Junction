import { displayCheckout } from "./displays/displayCheckout.js";
import { handleCartHover } from "./handlers/handleCartHover.js";
import { updateAll } from "./handlers/handleUpdate.js";

function checkout() {
  displayCheckout();
  handleCartHover();

  window.addEventListener("storage", () => {
    displayCheckout();
  });

  updateAll();
}

checkout();
