import { calculateDiscount } from "./utils.js";

/**
 * Generate a product card for the given product.
 * @param {Object} product Product object to build product card.
 * @returns Div containing the product card.
 */
function generateProductCard(product) {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");
  productDiv.id = product.id;

  const prodImg = document.createElement("img");
  prodImg.src = product.image;
  prodImg.alt = "Product";
  // Explicit Height/Width
  prodImg.style.height = "var(--product-image-size)";
  prodImg.style.width = "var(--product-image-size)";
  productDiv.appendChild(prodImg);

  if (product.discounted_price < product.price) {
    const discount = calculateDiscount(product.price, product.discounted_price);
    const discountTag = document.createElement("div");
    discountTag.classList.add("product-discount-tag");
    discountTag.innerHTML = `${discount}% off`;
    productDiv.appendChild(discountTag);
  }

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");
  productDiv.appendChild(productInfo);

  const linkToSingleProduct = document.createElement("a");
  linkToSingleProduct.href = "product.html?id=" + product.id;
  productInfo.appendChild(linkToSingleProduct);

  const productDescription = document.createElement("div");
  productDescription.classList.add("product-description");
  linkToSingleProduct.appendChild(productDescription);

  const productHeader = document.createElement("h3");
  productHeader.classList.add("product-header");
  productHeader.innerHTML = product.name;
  productDescription.appendChild(productHeader);

  const productParagraph = document.createElement("p");
  productParagraph.classList.add("product-paragraph");
  productParagraph.innerHTML = product.description;

  productDescription.appendChild(productParagraph);

  const productShopInfo = document.createElement("div");
  productShopInfo.className = "product-shop-info";
  productInfo.appendChild(productShopInfo);

  const productPrices = document.createElement("div");
  productPrices.className = "product-prices";
  productShopInfo.appendChild(productPrices);

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
  addToCart.classList.add("add-to-cart");
  productShopInfo.appendChild(addToCart);

  const cartImage = document.createElement("img");
  cartImage.src = "./assets/images/add-to-cart.svg";
  cartImage.alt = "Add to Cart";
  // Explicit Image Height/Width
  cartImage.style.width = "61px";
  cartImage.style.height = "63px";
  addToCart.appendChild(cartImage);

  addToCart.addEventListener("click", () => onAddToCart(product));

  return productDiv;
}

function formatPrice(price) {
  return (
    "R " +
    price
      .toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
      .replace(",", ", ")
  );
}

function onAddToCart(product) {
  console.log(product.id);
}

export { generateProductCard };
