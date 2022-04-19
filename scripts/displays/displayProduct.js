import { generateSingleProductCard } from "../generators/generateSingleProductCard.js";

/**
 * Display single product on product.html.
 * @param {Object} product The product to display.
 */
function displayProduct(product) {
  const displayContainer = document.getElementById("display-container");

  // Clear Container
  displayContainer.innerHTML = "";

  // Add Product Info
  displayContainer.appendChild(generateSingleProductCard(product));
}

export { displayProduct };
