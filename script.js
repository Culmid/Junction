import header from "./components/header.js";
import main from "./components/main.js";
import footer from "./components/footer.js";

function home() {
  console.log("home");

  const pageWrapper = document.createElement("div");
  pageWrapper.className = "page-wrapper";

  const pageContentContainer = document.createElement("div");
  pageContentContainer.className = "page-content-container";
  pageWrapper.appendChild(pageContentContainer);

  pageContentContainer.appendChild(header());
  pageContentContainer.appendChild(main());
  pageContentContainer.appendChild(footer());

  return pageWrapper;
}

document.body.appendChild(home());
