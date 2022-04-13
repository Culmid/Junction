import { displayCheckout } from "./displayCheckout.js";
import { handleCartHover } from "./handleCartHover.js";

function checkout() {
  displayCheckout();
  handleCartHover();

  window.addEventListener("storage", () => displayCheckout());
}

checkout();
