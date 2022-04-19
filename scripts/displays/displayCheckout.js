import { generateCheckoutCard } from "../generators/generateCheckoutCard.js";
import {
  clearCart,
  getCartCount,
  getCart,
  getCartTotal,
} from "../utilities/shoppingCart.js";
import { calculateVAT, formatPrice } from "../utilities/utils.js";
import { _r_e_t_s_a_e__g_g_e } from "../misc/_t_e_r_c_e_s__e_l_i_f_.js";

const onPay = () => _r_e_t_s_a_e__g_g_e();

/**
 * Display checkout container
 */
function displayCheckout() {
  if (getCartCount() > 0) {
    displayNormally();
  } else {
    displayEmptyPage();
  }
}

/**
 * Display checkout container normally (when items are in cart)
 */
function displayNormally() {
  const checkoutContainer = document.getElementById("checkout-container");
  checkoutContainer.classList.remove("checkout-container-empty");
  checkoutContainer.classList.add("checkout-container");
  checkoutContainer.innerHTML = "";

  const payButton = document.getElementById("pay-button");
  payButton.style.display = "inline";
  payButton.addEventListener("click", onPay);

  checkoutContainer.appendChild(checkoutTop());
  checkoutContainer.appendChild(checkoutItemsList());
  checkoutContainer.appendChild(checkoutPrices());
}

/**
 * Generate top of checkout container.
 * @returns HTMLElement containing top of checkout container.
 */
function checkoutTop() {
  const checkoutTop = document.createElement("div");
  checkoutTop.classList.add("checkout-top");

  checkoutTop.appendChild(checkoutHeader());
  checkoutTop.appendChild(checkoutClearButton());
  return checkoutTop;
}

/**
 * Generate checkout container header.
 * @returns HTMLElement containing checkout header.
 */
function checkoutHeader() {
  const checkoutHeader = document.createElement("h2");
  const itemCount = getCartCount();
  checkoutHeader.innerHTML = `Your cart has ${itemCount} item${
    itemCount > 1 ? "s" : ""
  }`;

  return checkoutHeader;
}

/**
 * Generate clear cart button in checkout container.
 * @returns HTMLElement containing checkout clear button.
 */
function checkoutClearButton() {
  const checkoutClear = document.createElement("button");
  checkoutClear.innerHTML = "Clear Cart";
  checkoutClear.addEventListener("click", () => {
    clearCart();
    displayCheckout();
  });

  return checkoutClear;
}

/**
 * Generate checkout items list in checkout container using checkout cards.
 * @returns HTMLElement containing checkout items list.
 */
function checkoutItemsList() {
  const checkoutItems = document.createElement("ul");
  checkoutItems.classList.add("checkout-items");

  getCart().forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.appendChild(generateCheckoutCard(item, index));
    checkoutItems.appendChild(listItem);
  });

  return checkoutItems;
}

/**
 * Generate formatted checkout prices in the checkout container.
 * @returns HTMLElement containing checkout prices.
 */
function checkoutPrices() {
  const checkoutPricesContainer = document.createElement("div");
  checkoutPricesContainer.classList.add("checkout-prices-container");

  const checkoutPrices = document.createElement("div");
  checkoutPrices.classList.add("checkout-prices");
  checkoutPricesContainer.appendChild(checkoutPrices);

  const totalPrice = getCartTotal();
  const VAT = calculateVAT(totalPrice);
  const finalPrice = totalPrice + VAT;

  checkoutPrices.appendChild(checkoutPrice("Sub-total", totalPrice));
  checkoutPrices.appendChild(checkoutPrice("VAT:", VAT));
  checkoutPrices.appendChild(
    checkoutPrice("Total:", finalPrice, "checkout-total")
  );

  return checkoutPricesContainer;
}

/**
 * Generate general formatted price for use in checkout prices container.
 * @param {string} text Text to put inside price.
 * @param {number} value Value to assign to text.
 * @param {string} extraClass Extra CSS class to assign to price.
 * @returns HTMLElement with formatted price.
 */
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

/**
 * Display empty checkout page (no items in cart)
 */
function displayEmptyPage() {
  const checkoutContainer = document.getElementById("checkout-container");
  checkoutContainer.classList.remove("checkout-container");
  checkoutContainer.classList.add("checkout-container-empty");
  checkoutContainer.innerHTML = "Your cart is empty";

  const payButton = document.getElementById("pay-button");
  payButton.style.display = "none";
}

export { displayCheckout };
