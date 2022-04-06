function main() {
  const main = document.createElement("main");

  main.appendChild(imageBanner());
  main.appendChild(mainContent());
  return main;
}

function imageBanner() {
  const imageBanner = document.createElement("div");
  imageBanner.className = "image-banner";

  const imageBannerMessage = document.createElement("div");
  imageBannerMessage.className = "image-banner-message";
  imageBannerMessage.innerHTML = "30% off all Winter stock";
  imageBanner.appendChild(imageBannerMessage);

  return imageBanner;
}

function mainContent() {
  const mainContentContainer = document.createElement("div");
  mainContentContainer.className = "main-content-container";

  const productListHeader = document.createElement("h2");
  productListHeader.className = "product-list-header";
  productListHeader.innerHTML = "products";
  mainContentContainer.appendChild(productListHeader);

  const productList = document.createElement("ul");
  productList.className = "product-list";
  mainContentContainer.appendChild(productList);

  const products = [
    {
      name: "Mac Book Pro",
      description:
        "Mac Book Pro is made by Apple Computers and contains a powerful i7 processor.",
      price: 19529.0,
      discounted_price: 17390.0,
      image: "./assets/images/product.png",
    },
    {
      name: "Mac Book Pro",
      description:
        "Mac Book Pro is made by Apple Computers and contains a powerful i7 processor.",
      price: 17390.0,
      discounted_price: 17390.0,
      image: "./assets/images/product.png",
    },
    {
      name: "Mac Book Pro",
      description:
        "Mac Book Pro is made by Apple Computers and contains a powerful i7 processor.",
      price: 19529.0,
      discounted_price: 17390.0,
      image: "./assets/images/product.png",
    },
  ];

  products.forEach((productInfo) => {
    productList.appendChild(product(productInfo));
  });

  const showMore = document.createElement("button");
  showMore.className = "show-more";
  showMore.innerHTML = "show more";
  mainContentContainer.appendChild(showMore);

  showMore.addEventListener("click", () => {
    products.forEach((productInfo) => {
      productList.appendChild(product(productInfo));
    });
  });

  return mainContentContainer;
}

function product({ name, description, price, discounted_price, image }) {
  const listItem = document.createElement("li");

  const product = document.createElement("div");
  product.className = "product";
  listItem.appendChild(product);

  const prodImg = document.createElement("img");
  prodImg.src = image;
  prodImg.alt = "Product";
  product.appendChild(prodImg);

  if (discounted_price < price) {
    const discount = Math.ceil((1 - discounted_price / price) * 100);
    const discountTag = document.createElement("div");
    discountTag.className = "product-discount-tag";
    discountTag.innerHTML = `${discount}% off`;
    product.appendChild(discountTag);
  }

  const productInfo = document.createElement("div");
  productInfo.className = "product-info";
  product.appendChild(productInfo);

  const productDescription = document.createElement("div");
  productDescription.className = "product-description";
  productInfo.appendChild(productDescription);

  const productHeader = document.createElement("h3");
  productHeader.className = "product-header";
  productHeader.innerHTML = name;
  productDescription.appendChild(productHeader);

  const productParagraph = document.createElement("p");
  productParagraph.className = "product-paragraph";
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
    productPriceTop.className = "product-price-top";
    productPriceTop.innerHTML = formatPrice(price);
    productPrices.appendChild(productPriceTop);
  }

  const productPriceBottom = document.createElement("div");
  productPriceBottom.className = "product-price-bottom";
  productPriceBottom.innerHTML = formatPrice(discounted_price);
  productPrices.appendChild(productPriceBottom);

  const addToCart = document.createElement("button");
  addToCart.className = "add-to-cart";
  productShopInfo.appendChild(addToCart);

  const cartImage = document.createElement("img");
  cartImage.src = "./assets/images/add-to-cart.svg";
  cartImage.alt = "Add to Cart";
  addToCart.appendChild(cartImage);

  return listItem;
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

export default main;
