async function fetchProducts() {
  let data;

  try {
    const response = await fetch(
      "https://yoco-students-api-server.herokuapp.com/v1/junction/"
    );
    data = await response.json();
  } catch (error) {
    console.log(error);

    // Fallback
    data = [];
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
  }

  return data;
}

async function fetchProduct(id) {
  let data;

  try {
    const response = await fetch(
      "https://yoco-students-api-server.herokuapp.com/v1/junction/product/" + id
    );
    data = await response.json();
  } catch (error) {
    console.log(error);

    // Fallback
    data = {
      id: 1,
      name: "Mac Book Pro",
      description:
        "Mac Book Pro is made by Apple Computers and contains a powerful i7 processor.",
      price: 19529,
      discounted_price: 17390,
      image: "./assets/images/product.png",
      company: "Q&Q",
    };
  }

  return data;
}

export { fetchProducts, fetchProduct };
