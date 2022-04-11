import { generateProductCard } from "./generateProductCard.js";

/**
 * Display product cards in the display container.
 * @param {Array} products Array of JSON product objects.
 */
function displayProducts(products) {
  const displayContainer = document.getElementById("display-container");

  // Clear Container
  displayContainer.textContent = "";

  products.forEach((product) =>
    displayContainer.appendChild(generateProductCard(product))
  );
}

export { displayProducts };
