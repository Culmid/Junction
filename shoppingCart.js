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

/**
 * Calculate list of product in the cart.
 * @returns Array with cart items inside recorded as -> [Product Object, Quantity, Total].
 */
function getCartList() {
  const cart = JSON.parse(window.localStorage.getItem("cart"));
  const cartList = [];

  if (cart != null) {
    cart.forEach((cartItem) => {
      const index = cartList.findIndex(
        (listEntry) => listEntry[0].id === cartItem.id
      );

      if (index > -1) {
        cartList[index][1]++;
      } else {
        cartList.push([cartItem, 1]);
      }
    });
  }

  cartList.forEach((item) => item.push(item[0].discounted_price * item[1]));

  return cartList; // Needs sort
}

export { addToCart, removeFromCart, getCartTotal, clearCart, getCartList };
