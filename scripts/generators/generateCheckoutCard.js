import { displayCheckout } from "../displays/displayCheckout.js";
import { removeByIndex } from "../utilities/shoppingCart.js";
import { formatPrice } from "../utilities/utils.js";

/**
 * Generate a checkout page item card.
 * @param {Object} product Product Object.
 * @param {number} index Index of product in cart.
 * @returns HTMLElement containing the checkout card.
 */
function generateCheckoutCard(product, index) {
  const checkoutItem = document.createElement("div");
  checkoutItem.classList.add("checkout-item");

  checkoutItem.appendChild(checkoutItemLeft(product));
  checkoutItem.appendChild(checkoutItemRight(product, index));

  return checkoutItem;
}

/**
 * Generate the left div of the checkout card.
 * @param {Object} product Product object with image and name extracted.
 * @returns HTMLElement containing the left elements of the card.
 */
function checkoutItemLeft({ image, name }) {
  const checkoutItemLeft = document.createElement("div");
  checkoutItemLeft.classList.add("checkout-item-left");

  checkoutItemLeft.appendChild(itemImage(image));
  checkoutItemLeft.appendChild(itemHeader(name));

  return checkoutItemLeft;
}

/**
 * Generate the image element for this checkout item.
 * @param {string} image Path to the image for this item.
 * @returns HTMLElement containing the image for this item.
 */
function itemImage(image) {
  const itemImg = document.createElement("img");
  itemImg.src = image;
  itemImg.alt = "Item";
  itemImg.style.height = "100px";
  itemImg.style.width = "100px";

  return itemImg;
}

/**
 * Generate the header for this item.
 * @param {string} name Name of the current item.
 * @returns HTMLElement of item header.
 */
function itemHeader(name) {
  const itemHeader = document.createElement("h3");
  itemHeader.innerHTML = name;

  return itemHeader;
}

/**
 * Generate the right div in the checkout card.
 * @param {Object} product Product object with discounted_price extracted.
 * @param {number} index Index of the product in the cart.
 * @returns HTMLElement containing the right div in the checkout card.
 */
function checkoutItemRight({ discounted_price }, index) {
  const checkoutItemRight = document.createElement("div");
  checkoutItemRight.classList.add("checkout-item-right");

  checkoutItemRight.appendChild(checkoutItemPrice(discounted_price));
  checkoutItemRight.appendChild(removeButton(index));

  return checkoutItemRight;
}

/**
 * Generate the checkout item price for the checkout card.
 * @param {number} discountedPrice Lowest price of the item currently.
 * @returns HTMLElement containing the checkout item price.
 */
function checkoutItemPrice(discountedPrice) {
  const checkoutItemPrice = document.createElement("div");
  checkoutItemPrice.classList.add("checkout-item-price");
  checkoutItemPrice.innerHTML = formatPrice(discountedPrice);

  return checkoutItemPrice;
}

/**
 * Generate the remove button for the checkout card.
 * @param {number} index Index of the item in the cart.
 * @returns HTMLElement containing the remove button.
 */
function removeButton(index) {
  const removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";

  removeButton.addEventListener("click", () => {
    removeByIndex(index);
    displayCheckout();
  });

  return removeButton;
}

export { generateCheckoutCard };
