import { formatPrice } from "./utils.js";

function generateDropdownCard([product, quantity, total]) {
  const cartDropdownItem = document.createElement("div");
  cartDropdownItem.classList.add("cart-dropdown-item");

  const cartDropdownHeader = document.createElement("h3");
  cartDropdownHeader.classList.add("cart-dropdown-header");
  cartDropdownHeader.innerHTML = product.name;
  cartDropdownItem.appendChild(cartDropdownHeader);

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
