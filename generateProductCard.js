/**
 * Generate a product card for the given product.
 * @param {Object} product Product object to build product card.
 * @returns Div containing the product card.
 */
function generateProductCard({
  id,
  name,
  description,
  price,
  discounted_price,
  image,
}) {
  const product = document.createElement("div");
  product.classList.add("product");
  product.id = id;

  const prodImg = document.createElement("img");
  prodImg.src = image;
  prodImg.alt = "Product";
  // Explicit Height/Width
  prodImg.style.height = "var(--product-image-size)";
  prodImg.style.width = "var(--product-image-size)";
  product.appendChild(prodImg);

  if (discounted_price < price) {
    const discount = Math.round((1 - discounted_price / price) * 100);
    const discountTag = document.createElement("div");
    discountTag.classList.add("product-discount-tag");
    discountTag.innerHTML = `${discount}% off`;
    product.appendChild(discountTag);
  }

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");
  product.appendChild(productInfo);

  const linkToSingleProduct = document.createElement("a");
  linkToSingleProduct.href = "product.html?id=" + id;
  productInfo.appendChild(linkToSingleProduct);

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

  const productShopInfo = document.createElement("div");
  productShopInfo.className = "product-shop-info";
  productInfo.appendChild(productShopInfo);

  const productPrices = document.createElement("div");
  productPrices.className = "product-prices";
  productShopInfo.appendChild(productPrices);

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

  return product;
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

export { generateProductCard };
