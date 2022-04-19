import { formatPrice, onAddToCart } from "../utilities/utils.js";

/**
 * Generate single product card for product.html.
 * @param {Object} product Product object to use for generation.
 * @returns Div containing the single product card.
 */
function generateSingleProductCard(product) {
  const singleProd = document.createElement("div");
  singleProd.classList.add("single-product");

  singleProd.appendChild(singleProductImage(product));
  singleProd.appendChild(singleProductInfo(product));

  return singleProd;
}

/**
 * Generate single product image.
 * @param {Object} product Product object with image extracted.
 * @returns HTMLElement containing single product image.
 */
function singleProductImage({ image }) {
  const singleProdImg = document.createElement("img");
  singleProdImg.src = image;
  singleProdImg.alt = "Single Product Image";
  singleProdImg.style.height = "800px";
  singleProdImg.style.width = "800px";

  return singleProdImg;
}

/**
 * Generate the single product information section.
 * @param {Object} product Product Object.
 * @returns HTMLElement containing single product information section.
 */
function singleProductInfo(product) {
  const singleProdInfo = document.createElement("div");
  singleProdInfo.classList.add("single-product-info");

  singleProdInfo.appendChild(singleProductDescription(product));
  singleProdInfo.appendChild(singleProductShopInfo(product));

  return singleProdInfo;
}

/**
 * Generate the single product description.
 * @param {Object} product Product object with name, company and description extracted.
 * @returns HTMLElement containing single product description.
 */
function singleProductDescription({ name, company, description }) {
  const singleProdDescription = document.createElement("div");
  singleProdDescription.classList.add("single-product-description");

  const singleProdHeader = document.createElement("h2");
  singleProdHeader.classList.add("single-product-header");
  singleProdHeader.innerHTML = name;
  singleProdDescription.appendChild(singleProdHeader);

  const singleProdSubHeader = document.createElement("h3");
  singleProdSubHeader.classList.add("single-product-sub-header");
  const span = document.createElement("span");
  span.innerHTML = company;
  singleProdSubHeader.innerHTML = "By ";
  singleProdSubHeader.appendChild(span);
  singleProdDescription.appendChild(singleProdSubHeader);

  const singleProdParagraph = document.createElement("p");
  singleProdParagraph.classList.add("single-product-paragraph");
  singleProdParagraph.innerHTML = description;
  singleProdDescription.appendChild(singleProdParagraph);

  return singleProdDescription;
}

/**
 * Generate the single product shop information.
 * @param {Object} product Product Object.
 * @returns HTMLElement containing the single product shop information.
 */
function singleProductShopInfo(product) {
  const singleProdShop = document.createElement("div");
  singleProdShop.classList.add("single-product-shop-info");

  singleProdShop.appendChild(singleProductPrices(product));
  singleProdShop.appendChild(addToCartButton(product));

  return singleProdShop;
}

/**
 * Generate the single product prices, in the correct formatting.
 * @param {Object} product Product object with price and discounted_price extracted.
 * @returns HTMLElement containing the single product prices.
 */
function singleProductPrices({ price, discounted_price }) {
  const productPrices = document.createElement("div");
  productPrices.classList.add("product-prices");

  if (discounted_price < price) {
    const productPriceTop = document.createElement("div");
    productPriceTop.classList.add("product-price-top");
    productPriceTop.innerHTML = formatPrice(price);
    productPrices.appendChild(productPriceTop);
  }

  const productPriceBottom = document.createElement("div");
  productPriceBottom.classList.add("product-price-bottom");
  productPriceBottom.innerHTML = formatPrice(discounted_price);
  productPrices.appendChild(productPriceBottom);

  return productPrices;
}

/**
 * Generate the add to cart button.
 * @param {Object} product Product Object.
 * @returns HTMLElement containing the add to cart button.
 */
function addToCartButton(product) {
  const addToCart = document.createElement("button");
  addToCart.classList.add("dark-pink-button");
  addToCart.innerHTML = "add to cart";
  addToCart.addEventListener("click", () => onAddToCart(product));

  return addToCart;
}

export { generateSingleProductCard };
