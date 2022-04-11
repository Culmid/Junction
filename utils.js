/**
 * Fetch data from a URL.
 * @param {string} url URL to fetch resources from.
 * @returns JSON data from the URL.
 */
async function doFetch(url) {
  try {
    const data = await fetch(url);
    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Calculate percentage discount on prices.
 * @param {Number} price Initial product price.
 * @param {Number} discountedPrice Discounted product price.
 * @returns Percentage discount.
 */
function calculateDiscount(price, discountedPrice) {
  return Math.round((1 - discountedPrice / price) * 100);
}

export { doFetch, calculateDiscount };
