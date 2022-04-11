import { API_URL } from "./shared.js";
import { doFetch } from "./utils.js";

async function product() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const prod = await doFetch(API_URL + "product/" + id);
  console.log(prod);
}

product();
