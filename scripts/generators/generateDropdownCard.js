import { displayCheckout } from "../displays/displayCheckout.js";
import { displayDropdown } from "../displays/displayDropdown.js";
import {
  removeFromCart,
  removeAllFromCart,
} from "../utilities/shoppingCart.js";
import { formatPrice } from "../utilities/utils.js";

/**
 * Generate dropdown card for single product in cart.
 * @param {Array} info Fixed length information array -> [product, quantity, total]
 * @returns HTMLElement containing dropdown card.
 */
function generateDropdownCard([product, quantity, total]) {
  const cartDropdownItem = document.createElement("div");
  cartDropdownItem.classList.add("cart-dropdown-item");

  cartDropdownItem.appendChild(cartDropdownTop(product));
  cartDropdownItem.appendChild(cartDropdownDetails(product, quantity, total));

  return cartDropdownItem;
}

/**
 * Generate the top of the cart dropdown card.
 * @param {Object} product Product Object.
 * @returns HTMLElement containing top of cart dropdown.
 */
function cartDropdownTop(product) {
  const cartDropdownTop = document.createElement("div");
  cartDropdownTop.classList.add("cart-dropdown-top");

  cartDropdownTop.appendChild(cartDropdownHeader(product));
  cartDropdownTop.appendChild(cartDropdownRemovals(product));

  return cartDropdownTop;
}

/**
 * Generate cart dropdown card header.
 * @param {Object} product Product object with name extracted.
 * @returns HTMLElement containing dropdown header.
 */
function cartDropdownHeader({ name }) {
  const cartDropdownHeader = document.createElement("h3");
  cartDropdownHeader.classList.add("cart-dropdown-header");
  cartDropdownHeader.innerHTML = name;

  return cartDropdownHeader;
}

/**
 * Generate removals section on the dropdown card.
 * @param {Object} product Product Object.
 * @returns HTMLElement containing removals section.
 */
function cartDropdownRemovals(product) {
  const cartDropdownRemovals = document.createElement("div");
  cartDropdownRemovals.classList.add("cart-dropdown-removals");

  cartDropdownRemovals.appendChild(cartDropdownMinus(product));
  cartDropdownRemovals.appendChild(cartDropdownTrash(product));

  return cartDropdownRemovals;
}

/**
 * Generate the minus button on the dropdown card.
 * @param {Object} product Product Object.
 * @returns HTMLElement containing the minus button.
 */
function cartDropdownMinus(product) {
  const cartDropdownMinus = document.createElement("button");
  cartDropdownMinus.addEventListener("click", () => {
    removeFromCart(product);
    displayDropdown();

    if (window.location.pathname.includes("checkout.html")) {
      displayCheckout();
    }
  });

  const minusImage = document.createElement("img");
  minusImage.src = "./assets/images/minus-solid.svg";
  minusImage.alt = "Decrease";
  minusImage.style.width = "15px";
  minusImage.style.height = "15px";
  cartDropdownMinus.appendChild(minusImage);

  return cartDropdownMinus;
}

/**
 * Generate the trash button on the dropdown card.
 * @param {Object} product Product Object.
 * @returns HTMLElement containing the trash button.
 */
function cartDropdownTrash(product) {
  const cartDropdownTrash = document.createElement("button");
  cartDropdownTrash.addEventListener("click", () => {
    removeAllFromCart(product);
    displayDropdown();

    if (window.location.pathname.includes("checkout.html")) {
      displayCheckout();
    }
  });

  const trashImage = document.createElement("img");
  trashImage.src = "./assets/images/trash-solid.svg";
  trashImage.alt = "Remove";
  trashImage.style.width = "15px";
  trashImage.style.height = "15px";
  cartDropdownTrash.appendChild(trashImage);

  return cartDropdownTrash;
}

/**
 * Generate the dropdown card details.
 * @param {Object} product Product Object.
 * @param {number} quantity Number of instances of this object in the cart.
 * @param {number} total Total cost of the instances of this object in the cart.
 * @returns HTMLElement containing the dropdown card details.
 */
function cartDropdownDetails(product, quantity, total) {
  const cartDropdownDetails = document.createElement("div");
  cartDropdownDetails.classList.add("cart-dropdown-details");

  cartDropdownDetails.appendChild(cartDropdownImage(product));
  cartDropdownDetails.appendChild(cartDropdownPrices(product, quantity, total));

  return cartDropdownDetails;
}

/**
 * Generate the dropdown card image.
 * @param {Object} product Product object with image and name extracted.
 * @returns HTMLElement containing the dropdown card image.
 */
function cartDropdownImage({ image, name }) {
  const img = document.createElement("img");
  img.src = image;
  img.alt = name;
  img.style.height = "70px";
  img.style.width = "70px";

  return img;
}

/**
 * Generate the formatted prices on the dropdown card.
 * @param {Object} product Product object with discounted_price extracted.
 * @param {number} quantity Number of instances of this object in the cart.
 * @param {number} total Total cost of the instances of this object in the cart.
 * @returns HTMLElement containing the dropdown card prices.
 */
function cartDropdownPrices({ discounted_price }, quantity, total) {
  const cartDropdownPrices = document.createElement("div");
  cartDropdownPrices.classList.add("cart-dropdown-prices");

  cartDropdownPrices.appendChild(quantityParagraph(quantity));
  cartDropdownPrices.appendChild(timesParagraph());
  cartDropdownPrices.appendChild(priceParagraph(discounted_price));
  cartDropdownPrices.appendChild(totalParagraph(total));

  return cartDropdownPrices;
}

/**
 * Generate the quantity paragraph on the dropdown card.
 * @param {number} quantity Number of instances of this object in the cart.
 * @returns HTMLElement containing the quantity paragraph.
 */
function quantityParagraph(quantity) {
  const quantityPar = document.createElement("p");
  const quantitySpan = document.createElement("span");
  quantitySpan.innerHTML = "Quantity:";
  quantityPar.appendChild(quantitySpan);
  quantityPar.append(" " + quantity);

  return quantityPar;
}

/**
 * Generate times paragraph.
 * @returns HTMLElement containing times paragraph.
 */
function timesParagraph() {
  const timesPar = document.createElement("p");
  timesPar.innerHTML = "x";

  return timesPar;
}

/**
 * Generate the price paragraph in the dropdown card.
 * @param {number} discountedPrice Lowest price of object at the time of rendering.
 * @returns HTMLElement containing the price paragraph.
 */
function priceParagraph(discountedPrice) {
  const pricePar = document.createElement("p");
  const priceSpan = document.createElement("span");
  priceSpan.innerHTML = "Price:";
  pricePar.appendChild(priceSpan);
  pricePar.append(" " + formatPrice(discountedPrice));

  return pricePar;
}

/**
 * Generate the total paragraph on the dropdown card.
 * @param {number} total Total cost of the instances of this object in the cart.
 * @returns HTMLElement containing the total paragraph.
 */
function totalParagraph(total) {
  const totalPar = document.createElement("p");
  totalPar.innerHTML = "= " + formatPrice(total);

  return totalPar;
}

export { generateDropdownCard };
