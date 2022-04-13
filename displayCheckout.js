import { generateCheckoutCard } from "./generateCheckoutCard.js";
import {
  clearCart,
  getCartCount,
  getCart,
  getCartTotal,
} from "./shoppingCart.js";
import { calculateVAT, formatPrice } from "./utils.js";

function displayCheckout() {
  // Set Item Count
  const checkoutItemCount = document.getElementById("checkout-item-count");
  checkoutItemCount.innerHTML = getCartCount();

  // Clear Cart Button
  const checkoutClear = document.getElementById("checkout-clear");
  checkoutClear.addEventListener("click", () => {
    clearCart();
    displayCheckout();
  });

  // Checkout Items List
  const checkoutItems = document.getElementById("checkout-items");

  // Clear Items List
  checkoutItems.innerHTML = "";

  if (getCartCount() > 0) {
    getCart().forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.appendChild(generateCheckoutCard(item, index));
      checkoutItems.appendChild(listItem);
    });
  }

  // Update Prices
  const totalPrice = getCartTotal();
  const VAT = calculateVAT(totalPrice);
  const finalPrice = totalPrice + VAT;

  const checkoutSubTotal = document.getElementById("checkout-sub-total");
  checkoutSubTotal.innerHTML = formatPrice(totalPrice);

  const checkoutVAT = document.getElementById("checkout-vat");
  checkoutVAT.innerHTML = formatPrice(VAT);

  const checkoutTotal = document.getElementById("checkout-total");
  checkoutTotal.innerHTML = formatPrice(finalPrice);
}

export { displayCheckout };
