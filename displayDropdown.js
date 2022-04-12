import { generateDropdownCard } from "./generateDropdownCard.js";
import { getCartCount, getCartList, getCartTotal } from "./shoppingCart.js";
import { formatPrice } from "./utils.js";

function displayDropdown() {
  const dropdownList = document.getElementById("dropdown-list");

  // Clear Dropdown
  dropdownList.innerHTML = "";

  const cartList = getCartList();
  cartList.forEach((item) =>
    dropdownList.appendChild(generateDropdownCard(item))
  );
  console.log(cartList);

  const cartDropdownCount = document.getElementById("cart-dropdown-count");
  cartDropdownCount.lastChild.textContent = " " + getCartCount();

  const cartDropdownTotal = document.getElementById("cart-dropdown-total");
  cartDropdownTotal.lastChild.textContent = " " + formatPrice(getCartTotal());
}

export { displayDropdown };
