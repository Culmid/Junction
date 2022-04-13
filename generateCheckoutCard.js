import { displayCheckout } from "./displayCheckout.js";
import { removeByIndex } from "./shoppingCart.js";
import { formatPrice } from "./utils.js";

function generateCheckoutCard(product, index) {
  const checkoutItem = document.createElement("div");
  checkoutItem.classList.add("checkout-item");

  const checkoutItemLeft = document.createElement("div");
  checkoutItemLeft.classList.add("checkout-item-left");
  checkoutItem.appendChild(checkoutItemLeft);

  const itemImg = document.createElement("img");
  itemImg.src = product.image;
  itemImg.alt = "Item";
  // Explicit Height/Width
  itemImg.style.height = "100px";
  itemImg.style.width = "100px";
  checkoutItemLeft.appendChild(itemImg);

  const itemHeader = document.createElement("h3");
  itemHeader.innerHTML = product.name;
  checkoutItemLeft.appendChild(itemHeader);

  const checkoutItemRight = document.createElement("div");
  checkoutItemRight.classList.add("checkout-item-right");
  checkoutItem.appendChild(checkoutItemRight);

  const checkoutItemPrice = document.createElement("div");
  checkoutItemPrice.classList.add("checkout-item-price");
  checkoutItemPrice.innerHTML = formatPrice(product.discounted_price);
  checkoutItemRight.appendChild(checkoutItemPrice);

  const removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  checkoutItemRight.appendChild(removeButton);

  removeButton.addEventListener("click", () => {
    removeByIndex(index);
    displayCheckout();
  });

  return checkoutItem;
}

export { generateCheckoutCard };
