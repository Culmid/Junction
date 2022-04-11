function addToCart(product) {
  const cart = JSON.parse(window.localStorage.getItem("cart"));

  if (cart === null) {
    window.localStorage.setItem("cart", JSON.stringify([product]));
  } else {
    cart.push(product);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }
}

function removeFromCart(product) {
  //
}

function getCartTotal() {
  //
}

function clearCart() {
  //
}

export { addToCart, removeFromCart, getCartTotal, clearCart };
