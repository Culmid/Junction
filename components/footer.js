function footer() {
  const footer = document.createElement("footer");

  const pageFooterLogo = document.createElement("h2");
  pageFooterLogo.className = "page-footer-logo";
  footer.appendChild(pageFooterLogo);

  const link = document.createElement("a");
  link.href = "#";
  pageFooterLogo.appendChild(link);

  const logoImg = document.createElement("img");
  logoImg.src = "./assets/images/logo-footer.svg";
  logoImg.alt = "Logo";
  link.appendChild(logoImg);

  return footer;
}

export default footer;
