/**
 * Adds an item to our cart.
 * @param {Object} product Product to add to cart.
 */
function addToCart(product) {
  const cart = JSON.parse(window.localStorage.getItem("cart"));

  if (cart === null) {
    window.localStorage.setItem("cart", JSON.stringify([product]));
  } else {
    cart.push(product);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }
}

/**
 * Remove one instance of a product from the cart.
 * @param {Object} product The product object to remove.
 * @throws Note: This function fails silently, an exception
 * is not throw if the delete operation does not successfully complete.
 */
function removeFromCart(product) {
  const cart = JSON.parse(window.localStorage.getItem("cart"));

  if (cart !== null) {
    const index = cart.findIndex((item) => item.id === product.id);

    if (index > -1) {
      cart.splice(index, 1);
      window.localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
}

/**
 * Remove all instances of a given product from the cart.
 * @param {Object} product Product to remove all instances of.
 * @throws Note: This function fails silently, an exception
 * is not throw if the delete operation does not successfully complete.
 */
function removeAllFromCart(product) {
  const cart = JSON.parse(window.localStorage.getItem("cart"));

  if (cart !== null) {
    window.localStorage.setItem(
      "cart",
      JSON.stringify(cart.filter((item) => item.id !== product.id))
    );
  }
}

/**
 * Get the total cost of all the items in the cart.
 * @returns Total cost of Cart.
 */
function getCartTotal() {
  console.log(getCartList().reduce((prev, item) => prev + item[2], 0));
  return getCartList().reduce((prev, item) => prev + item[2], 0);
}

/**
 * Deletes the cart from LocalStorage
 */
function clearCart() {
  window.localStorage.removeItem("cart");
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

/**
 * Get total number of items in the cart.
 * @returns The number of items in the cart.
 */
function getCartCount() {
  return getCartList().reduce((prev, item) => prev + item[1], 0);
}

export {
  addToCart,
  removeFromCart,
  removeAllFromCart,
  getCartTotal,
  clearCart,
  getCartList,
  getCartCount,
};
