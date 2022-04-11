/**
 * Display product cards in the display container.
 * @param {Array} products Array of JSON product objects.
 */
function displayProducts(products) {
  console.log(products);

  const displayContainer = document.getElementById("display-container");

  // Clear Container
  displayContainer.textContent = "";
}

export { displayProducts };
