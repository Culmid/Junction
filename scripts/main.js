import { displayProducts } from "./displays/displayProducts.js";
import { handleCartHover } from "./handlers/handleCartHover.js";
import { countInit } from "./handlers/handleUpdate.js";
import { API_URL } from "./utilities/shared.js";
import { doFetch } from "./utilities/utils.js";

/**
 * Run necessary functions to display the home page
 */
async function main() {
  const products = await doFetch(API_URL);
  displayProducts(products);
  handleCartHover();
  countInit();
}

main();
