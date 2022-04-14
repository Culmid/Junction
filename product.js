import { displayProduct } from "./displayProduct.js";
import { handleCartHover } from "./handleCartHover.js";
import { updateAll } from "./handleUpdate.js";
import { API_URL } from "./shared.js";
import { doFetch } from "./utils.js";

async function product() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const currentProduct = await doFetch(API_URL + "product/" + id);
  console.log(currentProduct);

  displayProduct(currentProduct);
  handleCartHover();
  updateAll();
}

product();
