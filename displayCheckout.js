import { generateCheckoutCard } from "./generateCheckoutCard.js";
import {
  clearCart,
  getCartCount,
  getCart,
  getCartTotal,
} from "./shoppingCart.js";
import { calculateVAT, formatPrice } from "./utils.js";
import { _r_e_t_s_a_e__g_g_e } from "./_t_e_r_c_e_s__e_l_i_f_.js";

const onPay = () => _r_e_t_s_a_e__g_g_e();

function displayCheckout() {
  if (getCartCount() > 0) {
    displayNormally();
  } else {
    displayEmptyPage();
  }
}

function displayNormally() {
  // Get Correct Styling/Clear Container
  const checkoutContainer = document.getElementById("checkout-container");
  checkoutContainer.classList.remove("checkout-container-empty");
  checkoutContainer.classList.add("checkout-container");
  checkoutContainer.innerHTML = "";

  // Hide/Show Pay Button
  const payButton = document.getElementById("pay-button");
  payButton.style.display = "inline";
  payButton.addEventListener("click", onPay);

  const checkoutTop = document.createElement("div");
  checkoutTop.classList.add("checkout-top");
  checkoutContainer.appendChild(checkoutTop);

  const checkoutHeader = document.createElement("h2");
  const itemCount = getCartCount();
  checkoutHeader.innerHTML = `Your cart has ${itemCount} item${
    itemCount > 1 ? "s" : ""
  }`;
  checkoutTop.appendChild(checkoutHeader);

  // Clear Cart Button
  const checkoutClear = document.createElement("button");
  checkoutClear.innerHTML = "Clear Cart";
  checkoutClear.addEventListener("click", () => {
    clearCart();
    displayCheckout();
  });
  checkoutTop.appendChild(checkoutClear);

  // Checkout Items List
  const checkoutItems = document.createElement("ul");
  checkoutItems.classList.add("checkout-items");
  checkoutContainer.appendChild(checkoutItems);

  getCart().forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.appendChild(generateCheckoutCard(item, index));
    checkoutItems.appendChild(listItem);
  });

  // // Update Prices
  const totalPrice = getCartTotal();
  const VAT = calculateVAT(totalPrice);
  const finalPrice = totalPrice + VAT;

  const checkoutPricesContainer = document.createElement("div");
  checkoutPricesContainer.classList.add("checkout-prices-container");
  checkoutContainer.appendChild(checkoutPricesContainer);

  const checkoutPrices = document.createElement("div");
  checkoutPrices.classList.add("checkout-prices");
  checkoutPricesContainer.appendChild(checkoutPrices);

  checkoutPrices.appendChild(checkoutPrice("Sub-total", totalPrice));
  checkoutPrices.appendChild(checkoutPrice("VAT:", VAT));
  checkoutPrices.appendChild(
    checkoutPrice("Total:", finalPrice, "checkout-total")
  );
}

function checkoutPrice(text, value, extraClass) {
  const container = document.createElement("div");
  container.classList.add("checkout-price");

  if (arguments.length > 2) {
    container.classList.add(extraClass);
  }

  const textP = document.createElement("p");
  textP.innerHTML = text;
  container.appendChild(textP);

  const valueP = document.createElement("p");
  valueP.innerHTML = formatPrice(value);
  container.appendChild(valueP);

  return container;
}

function displayEmptyPage() {
  // Get Correct Styling on container
  const checkoutContainer = document.getElementById("checkout-container");
  checkoutContainer.classList.remove("checkout-container");
  checkoutContainer.classList.add("checkout-container-empty");
  checkoutContainer.innerHTML = "Your cart is empty";

  // Hide/Show Pay Button
  const payButton = document.getElementById("pay-button");
  payButton.style.display = "none";
}

export { displayCheckout };
