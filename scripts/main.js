import { displayProducts } from "./displays/displayProducts.js";
import { handleCartHover } from "./handlers/handleCartHover.js";
import { updateAll } from "./handlers/handleUpdate.js";
import { API_URL } from "./utilities/shared.js";
import { doFetch } from "./utilities/utils.js";

async function main() {
  const products = await doFetch(API_URL);
  displayProducts(products);
  handleCartHover();
  updateAll();
}

main();
