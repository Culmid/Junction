import { formatPrice, onAddToCart } from "./utils.js";

/**
 * Generate single product card for product.html.
 * @param {Object} product Product object to use for generation.
 * @returns Div containing the single product card.
 */
function generateSingleProductCard(product) {
  const singleProd = document.createElement("div");
  singleProd.classList.add("single-product");

  const singleProdImg = document.createElement("img");
  singleProdImg.src = product.image;
  singleProdImg.alt = "Single Product Image";
  // Explicit Height/Width
  singleProdImg.style.height = "800px";
  singleProdImg.style.width = "800px";
  singleProd.appendChild(singleProdImg);

  const singleProdInfo = document.createElement("div");
  singleProdInfo.classList.add("single-product-info");
  singleProd.appendChild(singleProdInfo);

  const singleProdDescription = document.createElement("div");
  singleProdDescription.classList.add("single-product-description");
  singleProdInfo.appendChild(singleProdDescription);

  const singleProdHeader = document.createElement("h2");
  singleProdHeader.classList.add("single-product-header");
  singleProdHeader.innerHTML = product.name;
  singleProdDescription.appendChild(singleProdHeader);

  const singleProdSubHeader = document.createElement("h3");
  singleProdSubHeader.classList.add("single-product-sub-header");
  const span = document.createElement("span");
  span.innerHTML = product.company;
  singleProdSubHeader.innerHTML = "By ";
  singleProdSubHeader.appendChild(span);
  singleProdDescription.appendChild(singleProdSubHeader);

  const singleProdParagraph = document.createElement("p");
  singleProdParagraph.classList.add("single-product-paragraph");
  singleProdParagraph.innerHTML = product.description;
  singleProdDescription.appendChild(singleProdParagraph);

  const singleProdShop = document.createElement("div");
  singleProdShop.classList.add("single-product-shop-info");
  singleProdInfo.appendChild(singleProdShop);

  const productPrices = document.createElement("div");
  productPrices.classList.add("product-prices");
  singleProdShop.appendChild(productPrices);

  if (product.discounted_price < product.price) {
    const productPriceTop = document.createElement("div");
    productPriceTop.classList.add("product-price-top");
    productPriceTop.innerHTML = formatPrice(product.price);
    productPrices.appendChild(productPriceTop);
  }

  const productPriceBottom = document.createElement("div");
  productPriceBottom.classList.add("product-price-bottom");
  productPriceBottom.innerHTML = formatPrice(product.discounted_price);
  productPrices.appendChild(productPriceBottom);

  const addToCart = document.createElement("button");
  addToCart.classList.add("dark-pink-button");
  addToCart.innerHTML = "add to cart";
  singleProdShop.appendChild(addToCart);

  addToCart.addEventListener("click", () => onAddToCart(product));

  return singleProd;
}

export { generateSingleProductCard };
