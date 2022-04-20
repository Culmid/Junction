import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { mainBase } from "../components/mainBase.js";

/**
 * Construct general page template
 */
function constructPage() {
  const pageWrapper = document.createElement("div");
  pageWrapper.className = "page-wrapper";

  const pageContentContainer = document.createElement("div");
  pageContentContainer.className = "page-content-container";
  pageWrapper.appendChild(pageContentContainer);

  pageContentContainer.appendChild(header());
  pageContentContainer.appendChild(mainBase());
  pageContentContainer.appendChild(footer());

  document.body.appendChild(pageWrapper);
}

export { constructPage };
