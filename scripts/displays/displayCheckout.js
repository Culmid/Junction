import { generateCheckoutCard } from "../generators/generateCheckoutCard.js";
import {
  clearCart,
  getCartCount,
  getCart,
  getCartTotal,
} from "../utilities/shoppingCart.js";
import { calculateVAT, formatPrice } from "../utilities/utils.js";

/**
 * Display checkout container
 */
function displayCheckout() {
  const displayContainer = document.getElementById("display-container");
  displayContainer.innerHTML = "";

  if (getCartCount() > 0) {
    displayContainer.appendChild(normalCheckoutContainer());
    displayContainer.appendChild(payButton());
  } else {
    displayContainer.appendChild(emptyCheckoutContainer());
  }
}

/**
 * Generate checkout container normally (when items are in cart)
 * @returns HTMLElement containing the normal checkout container.
 */
function normalCheckoutContainer(displayContainer) {
  const checkoutContainer = document.createElement("div");
  checkoutContainer.classList.add("checkout-container");

  checkoutContainer.appendChild(checkoutTop());
  checkoutContainer.appendChild(checkoutItemsList());
  checkoutContainer.appendChild(checkoutPrices());

  return checkoutContainer;
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
 * Generate the pay button on the checkout page.
 * @returns HTMLElement containing the pay button.
 */
function payButton() {
  const payButton = document.createElement("button");
  payButton.classList.add("dark-pink-button");
  payButton.id = "pay-button";
  payButton.innerHTML = "pay";

  return payButton;
}

/**
 * Generate empty checkout page (no items in cart)
 * @returns HTMLElement containing the empty checkout container.
 */
function emptyCheckoutContainer() {
  const checkoutContainer = document.createElement("div");
  checkoutContainer.classList.add("checkout-container-empty");
  checkoutContainer.innerHTML = "Your cart is empty";

  return checkoutContainer;
}

export { displayCheckout };
