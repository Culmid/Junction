import { header, updateCartItems } from "./components/header.js";
import main from "./components/main.js";
import footer from "./components/footer.js";

let cartItems = 0;
const changeCartItems = (change) => {
  cartItems += change;
  updateCartItems(cartItems);
};

async function home() {
  let data;

  try {
    const response = await fetch(
      "https://yoco-students-api-server.herokuapp.com/v1/junction/"
    );
    data = await response.json();
  } catch (error) {
    console.log(error);

    // Fallback
    const products = [];
    for (let i = 0; i < 10; i++) {
      products.push({
        id: i,
        name: "Mac Book Pro",
        description:
          "Mac Book Pro is made by Apple Computers and contains a powerful i7 processor.",
        price: 19529,
        discounted_price: 17390,
        image: "./assets/images/product.png",
      });
    }

    data = products;
  }

  console.log(data);
  return renderHome(data);
}

function renderHome(data) {
  const pageWrapper = document.createElement("div");
  pageWrapper.className = "page-wrapper";

  const pageContentContainer = document.createElement("div");
  pageContentContainer.className = "page-content-container";
  pageWrapper.appendChild(pageContentContainer);

  pageContentContainer.appendChild(header());
  pageContentContainer.appendChild(main(data, changeCartItems));
  pageContentContainer.appendChild(footer());

  return pageWrapper;
}

// Option 1
document.body.appendChild(await home());

// Option 2
// home().then((homeElement) => document.body.appendChild(homeElement));
