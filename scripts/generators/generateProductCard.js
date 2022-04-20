import { addToCart } from "../utilities/shoppingCart.js";
import { calculateDiscount, formatPrice } from "../utilities/utils.js";

/**
 * Generate a product card for the given product.
 * @param {Object} product Product object to build product card.
 * @returns Div containing the product card.
 */
function generateProductCard(product) {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");
  productDiv.id = product.id;

  productDiv.appendChild(productCardImage(product));

  if (product.discounted_price < product.price) {
    productDiv.appendChild(discountTag(product));
  }

  productDiv.appendChild(productInfo(product));

  return productDiv;
}

/**
 * Generate product card image.
 * @param {Object} product Product object with id and image extracted.
 * @returns HTMLElement containing the product card image.
 */
function productCardImage({ id, image }) {
  const prodImgLink = document.createElement("a");
  prodImgLink.href = "product.html?id=" + id;

  const prodImg = document.createElement("img");
  prodImg.src = image;
  prodImg.alt = "Product";
  prodImg.style.height = "var(--product-image-size)";
  prodImg.style.width = "var(--product-image-size)";
  prodImgLink.appendChild(prodImg);

  return prodImgLink;
}

/**
 * Generate discount tag for product card.
 * @param {Object} product Product object with price and discounted_price extracted.
 * @returns HTMLElement containing the discount tag.
 */
function discountTag({ price, discounted_price }) {
  const discount = calculateDiscount(price, discounted_price);
  const discountTag = document.createElement("div");
  discountTag.classList.add("product-discount-tag");
  discountTag.innerHTML = `${discount}% off`;

  return discountTag;
}

/**
 * Generate the information section of the product card.
 * @param {Object} product Product object.
 * @returns HTMLElement containing the information section of the product card.
 */
function productInfo(product) {
  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  productInfo.appendChild(productDescription(product));
  productInfo.appendChild(productShopInfo(product));

  return productInfo;
}

/**
 * Generate the product description section on the product card.
 * @param {Object} product Product object with id, name and description extracted.
 * @returns HTMLElement containing the product description.
 */
function productDescription({ id, name, description }) {
  const linkToSingleProduct = document.createElement("a");
  linkToSingleProduct.href = "product.html?id=" + id;

  const productDescription = document.createElement("div");
  productDescription.classList.add("product-description");
  linkToSingleProduct.appendChild(productDescription);

  const productHeader = document.createElement("h3");
  productHeader.classList.add("product-header");
  productHeader.innerHTML = name;
  productDescription.appendChild(productHeader);

  const productParagraph = document.createElement("p");
  productParagraph.classList.add("product-paragraph");
  productParagraph.innerHTML = description;
  productDescription.appendChild(productParagraph);

  return linkToSingleProduct;
}

/**
 * Generate the product shop information.
 * @param {Object} product Product object.
 * @returns HTMLElement containing the product shop information.
 */
function productShopInfo(product) {
  const productShopInfo = document.createElement("div");
  productShopInfo.className = "product-shop-info";

  productShopInfo.appendChild(productPrices(product));
  productShopInfo.appendChild(addToCartButton(product));

  return productShopInfo;
}

/**
 * Generate the formatted product prices.
 * @param {Object} product  Product object with price and discounted_price extracted.
 * @returns HTMLElement containing the product prices.
 */
function productPrices({ price, discounted_price }) {
  const productPrices = document.createElement("div");
  productPrices.className = "product-prices";

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
 * Generate the add to cart button on the product card.
 * @param {Object} product Product object to add to the cart.
 * @returns HTMLElement containing the add to cart button.
 */
function addToCartButton(product) {
  const addToCartButton = document.createElement("button");
  addToCartButton.classList.add("add-to-cart");

  const cartImage = document.createElement("img");
  cartImage.src = "./assets/images/add-to-cart.svg";
  cartImage.alt = "Add to Cart";
  cartImage.style.width = "61px";
  cartImage.style.height = "63px";
  addToCartButton.appendChild(cartImage);

  addToCartButton.addEventListener("click", () => addToCart(product));

  return addToCartButton;
}

export { generateProductCard };
