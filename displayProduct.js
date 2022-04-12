import { generateSingleProductCard } from "./generateSingleProductCard.js";

function displayProduct(product) {
  const displayContainer = document.getElementById("display-container");

  // Clear Container
  displayContainer.innerHTML = "";

  // Add Product Info
  displayContainer.appendChild(generateSingleProductCard(product));
}

export { displayProduct };
