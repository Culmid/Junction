import { addToCart } from "./shoppingCart.js";

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

/**
 * Format price in en-US format, with spaces between commas.
 * @param {Number} price The price to format.
 * @returns String format of price with "R" prepended.
 */
function formatPrice(price) {
  return (
    "R " +
    price
      .toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
      .replace(/,/gi, ", ")
  );
}

/**
 * Calculate VAT according to currently known percentage.
 * @param {Number} price Price to calculate VAT on.
 * @returns Percentage VAT as a value in Rands.
 */
function calculateVAT(price) {
  return 0.15 * price;
}

export { doFetch, calculateDiscount, formatPrice, calculateVAT };
