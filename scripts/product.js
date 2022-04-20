import { displayProduct } from "./displays/displayProduct.js";
import { handleCartHover } from "./handlers/handleCartHover.js";
import { countInit } from "./handlers/handleUpdate.js";
import { API_URL } from "./utilities/shared.js";
import { doFetch } from "./utilities/utils.js";

async function product() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const currentProduct = await doFetch(API_URL + "product/" + id);

  displayProduct(currentProduct);
  handleCartHover();
  countInit();
}

product();
