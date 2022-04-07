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

  const products = [];
  let productIndex = 0;

  fetch("https://yoco-students-api-server.herokuapp.com/v1/junction/")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => products.push(item));
      return products.slice(productIndex, (productIndex += 3));
    })
    .catch((error) => {
      console.log(error);
      for (let i = 0; i < 10; i++) {
        products.push({
          id: i,
          name: "Mac Book Pro",
          description:
            "Mac Book Pro is made by Apple Computers and contains a powerful i7 processor.",
          price: 19529.0,
          discounted_price: 17390.0,
          image: "./assets/images/product.png",
        });
      }

      return products.slice(productIndex, (productIndex += 3));
    })
    .then((data) => {
      data.forEach((productInfo) => {
        productList.appendChild(product(productInfo));
      });
    });

  const showMore = document.createElement("button");
  showMore.className = "show-more";
  showMore.innerHTML = "show more";
  mainContentContainer.appendChild(showMore);

  showMore.addEventListener("click", () => {
    const data = products.slice(productIndex, (productIndex += 3));

    if (data.length > 0) {
      data.forEach((productInfo) => {
        productList.appendChild(product(productInfo));
      });
    }

    if (data.length < 3) {
      showMore.disabled = true;
    }
  });

  return mainContentContainer;
}

function product({
  id,
  name,
  description,
  price,
  discounted_price,
  image,
  company,
}) {
  const listItem = document.createElement("li");

  const product = document.createElement("div");
  product.className = "product";
  product.id = id;
  listItem.appendChild(product);

  const prodImg = document.createElement("img");
  prodImg.src = image;
  prodImg.alt = "Product";
  // Explicit Height/Width
  prodImg.style.height = "var(--product-image-size)";
  prodImg.style.width = "var(--product-image-size)";
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

  if (description) {
    productParagraph.innerHTML = description;
  } else {
    productParagraph.innerHTML = `Company: ${company}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
  }

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
  // Explicit Image Height/Width
  cartImage.style.width = "61px";
  cartImage.style.height = "63px";
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
