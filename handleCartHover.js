function handleCartHover() {
  const dropdown = document.getElementById("cart-dropdown");
  dropdown.addEventListener("mouseenter", () => {
    dropdown.style.display = "inline";
  });
  dropdown.addEventListener("mouseleave", () => {
    dropdown.style.display = "none";
  });

  const cart = document.getElementById("cart");
  cart.addEventListener("mouseenter", () => {
    dropdown.style.display = "inline";
  });
  cart.addEventListener("mouseleave", () => {
    dropdown.style.display = "none";
  });
}

export { handleCartHover };
