import { generateDropdownCard } from "./generateDropdownCard.js";
import { getCartList } from "./shoppingCart.js";

function displayDropdown() {
  const dropdownList = document.getElementById("dropdown-list");

  // Clear Dropdown
  dropdownList.innerHTML = "";

  const cartList = getCartList();
  cartList.forEach((item) =>
    dropdownList.appendChild(generateDropdownCard(item))
  );
  console.log(cartList);
}

export { displayDropdown };
