import { displayProducts } from "./displayProducts.js";
import { API_URL } from "./shared.js";
import { doFetch } from "./utils.js";

async function main() {
  const products = await doFetch(API_URL);
  displayProducts(products);
}

main();
