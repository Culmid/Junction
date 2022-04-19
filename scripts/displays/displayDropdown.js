import { generateDropdownCard } from "../generators/generateDropdownCard.js";
import {
  getCartCount,
  getCartList,
  getCartTotal,
} from "../utilities/shoppingCart.js";
import { formatPrice } from "../utilities/utils.js";

function displayDropdown() {
  const dropdownList = document.getElementById("dropdown-list");

  dropdownList.innerHTML = "";

  const cartList = getCartList();
  cartList.forEach((item) =>
    dropdownList.appendChild(generateDropdownCard(item))
  );

  const cartDropdownCount = document.getElementById("cart-dropdown-count");
  cartDropdownCount.lastChild.textContent = " " + getCartCount();

  const cartDropdownTotal = document.getElementById("cart-dropdown-total");
  cartDropdownTotal.lastChild.textContent = " " + formatPrice(getCartTotal());
}

export { displayDropdown };
