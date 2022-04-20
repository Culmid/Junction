import { formatPrice } from "../utilities/utils.js";

/**
 * Generate the general header element.
 * @returns HTMLElement containing the header element.
 */
function header() {
  const header = document.createElement("header");

  header.appendChild(discountBanner());
  header.appendChild(pageHeader());

  return header;
}

/**
 * Generate the discount banner for the header.
 * @returns HTMLElement containing the discount banner.
 */
function discountBanner() {
  const discountBanner = document.createElement("div");

  discountBanner.classList.add("discount-banner");
  discountBanner.innerHTML = "free shipping on orders over R 600";

  return discountBanner;
}

/**
 * Generate the general page header element for the header.
 * @returns HTMLElement containing the page header element.
 */
function pageHeader() {
  const pageHeader = document.createElement("div");
  pageHeader.classList.add("page-header");

  const pageHeaderLeft = document.createElement("div");
  pageHeaderLeft.classList.add("page-header-left");
  pageHeader.appendChild(pageHeaderLeft);

  pageHeaderLeft.appendChild(pageHeaderLogo());
  pageHeaderLeft.appendChild(navbar());

  const pageHeaderRight = document.createElement("div");
  pageHeaderRight.classList.add("page-header-right");
  pageHeader.appendChild(pageHeaderRight);

  pageHeaderRight.appendChild(pageHeaderCart());
  pageHeaderRight.appendChild(pageHeaderProfilePic());
  pageHeaderRight.appendChild(cartDropdown());

  return pageHeader;
}

/**
 * Generate the page header logo.
 * @returns HTMLElement containing the logo.
 */
function pageHeaderLogo() {
  const pageHeaderLogo = document.createElement("h1");
  pageHeaderLogo.classList.add("page-header-logo");

  const pageHeaderLogoLink = document.createElement("a");
  pageHeaderLogoLink.href = "/";
  pageHeaderLogo.appendChild(pageHeaderLogoLink);

  const logoImage = document.createElement("img");
  logoImage.src = "./assets/images/logo.svg";
  logoImage.alt = "Logo";
  logoImage.style.width = "215px";
  logoImage.style.height = "46px";
  pageHeaderLogoLink.appendChild(logoImage);

  return pageHeaderLogo;
}

/**
 * Generate the navbar element for the page header.
 * @returns HTMLElement containing the navbar element.
 */
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

/**
 * Generate the cart 'button' for the page header.
 * @returns HTMLElement containing the cart 'button'.
 */
function pageHeaderCart() {
  const link = document.createElement("a");
  link.classList.add("page-header-cart");
  link.id = "cart";
  link.href = "checkout.html";

  const cartImg = document.createElement("img");
  cartImg.src = "./assets/images/cart.svg";
  cartImg.alt = "Cart";
  cartImg.style.width = "39px";
  cartImg.style.height = "39px";
  link.appendChild(cartImg);

  const cartCount = document.createElement("div");
  cartCount.classList.add("page-header-cart-count");
  cartCount.id = "page-header-cart-count";
  cartCount.innerHTML = "0";
  link.appendChild(cartCount);

  return link;
}

/**
 * Generate the profile picture element for the page header.
 * @returns HTMLElement containing the profile picture element.
 */
function pageHeaderProfilePic() {
  const button = document.createElement("button");
  button.classList.add("page-header-profile-pic");

  const profilePic = document.createElement("img");
  profilePic.src = "./assets/images/profile.png";
  profilePic.alt = "Profile Picture";
  profilePic.style.width = "74px";
  profilePic.style.height = "74px";
  button.appendChild(profilePic);

  return button;
}

/**
 * Generate the cart dropdown element for the cart icon on the page header.
 * @returns HTMLElement containing the cart dropdown element.
 */
function cartDropdown() {
  const cartDropdown = document.createElement("div");
  cartDropdown.classList.add("cart-dropdown");
  cartDropdown.id = "cart-dropdown";

  const cartDropdownItems = document.createElement("div");
  cartDropdownItems.classList.add("cart-dropdown-items");
  cartDropdownItems.id = "dropdown-list";
  cartDropdown.appendChild(cartDropdownItems);

  const cartDropdownSummary = document.createElement("div");
  cartDropdownSummary.classList.add("cart-dropdown-summary");
  cartDropdown.appendChild(cartDropdownSummary);

  const summaryItems = document.createElement("div");
  summaryItems.classList.add("cart-dropdown-summary-items");
  summaryItems.id = "cart-dropdown-count";
  const itemSpan = document.createElement("span");
  itemSpan.innerHTML = "Items:";
  summaryItems.appendChild(itemSpan);
  summaryItems.append(" 0");
  cartDropdownSummary.appendChild(summaryItems);

  const summaryTotal = document.createElement("div");
  summaryTotal.classList.add("cart-dropdown-summary-total");
  summaryTotal.id = "cart-dropdown-total";
  const totalSpan = document.createElement("span");
  totalSpan.innerHTML = "Total:";
  summaryTotal.appendChild(totalSpan);
  summaryTotal.append(" " + formatPrice(0));
  cartDropdownSummary.appendChild(summaryTotal);

  const clearCart = document.createElement("button");
  clearCart.classList.add("clear-cart");
  clearCart.id = "clear-cart";
  clearCart.innerHTML = "Clear Cart";
  cartDropdown.appendChild(clearCart);

  return cartDropdown;
}

export { header };
