import { displayCheckout } from "./displayCheckout.js";
import { displayDropdown } from "./displayDropdown.js";
import { removeFromCart, removeAllFromCart } from "./shoppingCart.js";
import { formatPrice } from "./utils.js";

function generateDropdownCard([product, quantity, total]) {
  const cartDropdownItem = document.createElement("div");
  cartDropdownItem.classList.add("cart-dropdown-item");

  const cartDropdownTop = document.createElement("div");
  cartDropdownTop.classList.add("cart-dropdown-top");
  cartDropdownItem.appendChild(cartDropdownTop);

  const cartDropdownHeader = document.createElement("h3");
  cartDropdownHeader.classList.add("cart-dropdown-header");
  cartDropdownHeader.innerHTML = product.name;
  cartDropdownTop.appendChild(cartDropdownHeader);

  const cartDropdownRemovals = document.createElement("div");
  cartDropdownRemovals.classList.add("cart-dropdown-removals");
  cartDropdownTop.appendChild(cartDropdownRemovals);

  const cartDropdownMinus = document.createElement("button");
  cartDropdownMinus.addEventListener("click", () => {
    removeFromCart(product);
    displayDropdown();

    // On Checkout Page -> Synchronous Update
    if (window.location.pathname.includes("checkout.html")) {
      displayCheckout();
    }
  });
  cartDropdownRemovals.appendChild(cartDropdownMinus);

  const minusImage = document.createElement("img");
  minusImage.src = "./assets/images/minus-solid.svg";
  minusImage.alt = "Decrease";
  // Explicit Height/Width
  minusImage.style.width = "15px";
  minusImage.style.height = "15px";
  cartDropdownMinus.appendChild(minusImage);

  const cartDropdownTrash = document.createElement("button");
  cartDropdownTrash.addEventListener("click", () => {
    removeAllFromCart(product);
    displayDropdown();

    // On Checkout Page -> Synchronous Update
    if (window.location.pathname.includes("checkout.html")) {
      displayCheckout();
    }
  });
  cartDropdownRemovals.appendChild(cartDropdownTrash);

  const trashImage = document.createElement("img");
  trashImage.src = "./assets/images/trash-solid.svg";
  trashImage.alt = "Remove";
  // Explicit Height/Width
  trashImage.style.width = "15px";
  trashImage.style.height = "15px";
  cartDropdownTrash.appendChild(trashImage);

  const cartDropdownDetails = document.createElement("div");
  cartDropdownDetails.classList.add("cart-dropdown-details");
  cartDropdownItem.appendChild(cartDropdownDetails);

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.name;
  // Explicit Height/Width
  image.style.height = "70px";
  image.style.width = "70px";
  cartDropdownDetails.appendChild(image);

  const cartDropdownPrices = document.createElement("div");
  cartDropdownPrices.classList.add("cart-dropdown-prices");
  cartDropdownDetails.appendChild(cartDropdownPrices);

  const quantityPar = document.createElement("p");
  const quantitySpan = document.createElement("span");
  quantitySpan.innerHTML = "Quantity:";
  quantityPar.appendChild(quantitySpan);
  quantityPar.append(" " + quantity);
  cartDropdownPrices.appendChild(quantityPar);

  const xpar = document.createElement("p");
  xpar.innerHTML = "x";
  cartDropdownPrices.appendChild(xpar);

  const pricePar = document.createElement("p");
  const priceSpan = document.createElement("span");
  priceSpan.innerHTML = "Price:";
  pricePar.appendChild(priceSpan);
  pricePar.append(" " + formatPrice(product.discounted_price));
  cartDropdownPrices.appendChild(pricePar);

  const totalPar = document.createElement("p");
  totalPar.innerHTML = "= " + formatPrice(total);
  cartDropdownPrices.appendChild(totalPar);

  return cartDropdownItem;
}

export { generateDropdownCard };
