/**
 * Generate a product card for the given product.
 * @param {Object} product Product object to build product card.
 * @returns Div containing the product card.
 */
function generateProductCard(product) {
  console.log(product);
  const div = document.createElement("div");
  div.textContent = "Hello, World!";
  return div;
}

export { generateProductCard };
