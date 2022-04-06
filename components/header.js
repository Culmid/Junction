function header() {
  const header = document.createElement("header");

  header.appendChild(discountBanner());
  header.appendChild(pageHeader());

  return header;
}

function discountBanner() {
  const discountBanner = document.createElement("div");

  discountBanner.className = "discount-banner";
  discountBanner.innerHTML = "free shipping on orders over R 600";

  return discountBanner;
}

function pageHeader() {
  const pageHeader = document.createElement("div");
  pageHeader.className = "page-header";

  const pageHeaderLeft = document.createElement("div");
  pageHeaderLeft.className = "page-header-left";
  pageHeader.appendChild(pageHeaderLeft);

  pageHeaderLeft.appendChild(pageHeaderLogo());
  pageHeaderLeft.appendChild(navbar());

  const pageHeaderRight = document.createElement("div");
  pageHeaderRight.className = "page-header-right";
  pageHeader.appendChild(pageHeaderRight);

  pageHeaderRight.appendChild(pageHeaderCart());
  pageHeaderRight.appendChild(pageHeaderProfilePic());

  return pageHeader;
}

function pageHeaderLogo(params) {
  const pageHeaderLogo = document.createElement("h1");
  pageHeaderLogo.className = "page-header-logo";

  const pageHeaderLogoLink = document.createElement("a");
  pageHeaderLogoLink.href = "#";
  pageHeaderLogo.appendChild(pageHeaderLogoLink);

  const logoImage = document.createElement("img");
  logoImage.src = "./assets/images/logo.svg";
  logoImage.alt = "Logo";
  pageHeaderLogoLink.appendChild(logoImage);

  return pageHeaderLogo;
}

function navbar() {
  const navLinks = [
    ["what's new", "#"],
    ["specials", "#"],
    ["on sale", "#"],
    ["contact", "#"],
  ];

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  nav.appendChild(ul);

  navLinks.forEach((x) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    [link.innerHTML, link.href] = x;

    listItem.appendChild(link);
    ul.appendChild(listItem);
  });

  return nav;
}

function pageHeaderCart() {
  const button = document.createElement("button");
  button.className = "page-header-cart";

  const cartImg = document.createElement("img");
  cartImg.src = "./assets/images/cart.svg";
  cartImg.alt = "Cart";
  button.appendChild(cartImg);

  const cartCount = document.createElement("div");
  cartCount.className = "page-header-cart-count";
  cartCount.innerHTML = "0";
  button.appendChild(cartCount);

  return button;
}

function pageHeaderProfilePic() {
  const button = document.createElement("button");
  button.className = "page-header-profile-pic";

  const profilePic = document.createElement("img");
  profilePic.src = "./assets/images/profile.png";
  profilePic.alt = "Profile Picture";
  button.appendChild(profilePic);

  return button;
}

export default header;
