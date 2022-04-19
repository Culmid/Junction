import { generateProductCard } from "../generators/generateProductCard.js";

/**
 * Maximum Product displayed at any given time
 */
let max_products = 0;

/**
 * Display product cards in the display container.
 * @param {Array} products Array of JSON product objects.
 */
function displayProducts(products) {
  const displayContainer = document.getElementById("display-container");

  // Clear Container
  displayContainer.innerHTML = "";

  // Header
  const productListHeader = document.createElement("h2");
  productListHeader.classList.add("product-list-header");
  productListHeader.innerHTML = "products";
  displayContainer.appendChild(productListHeader);

  // Product List
  const productList = document.createElement("ul");
  productList.classList.add("product-list");
  displayContainer.appendChild(productList);

  products.slice(max_products, (max_products += 3)).forEach((product) => {
    console.log(product);
    const listItem = document.createElement("li");
    listItem.appendChild(generateProductCard(product));
    productList.appendChild(listItem);
  });

  // Show More Button
  const showMore = document.createElement("button");
  showMore.classList.add("show-more");
  showMore.innerHTML = "show more";
  displayContainer.appendChild(showMore);

  showMore.addEventListener("click", () => {
    const productSlice = products.slice(max_products, (max_products += 3));

    if (productSlice.length > 0) {
      productSlice.forEach((product) => {
        const listItem = document.createElement("li");
        listItem.appendChild(generateProductCard(product));
        productList.appendChild(listItem);
      });
    }

    if (productSlice.length < 3) {
      showMore.disabled = true;
    }
  });
}

export { displayProducts };
