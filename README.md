# Junction

## Description

This project is an example eCommerce website that is build from a Figma Design. The idea of this project is to build the basic functionality of an eCommerce website using vanilla JavaScript and HTML/CSS. This project is primarily a desktop centered project, however mobile support could/may be added.

## Implementation

Currently the project is a three page website, with a Home Page, a Single Product Page and a Checkout Page. All of these pages use dynamic generation in JS, to dynamically generate elements of the pages. The relevant HTML pages contain templates which are altered and built upon by the scripts in the scripts directory. The three pages are represented by the following HTML, CSS and JS files:

- Home: (index.html, assets/styles/styles.css, scripts/main.js)
- Single Product Page: (product.html, assets/styles/product.css, scripts/product.js)
- Checkout Page: (checkout.html, assets/styles/checkout.css, scripts/checkout.js)

The relevant scripts make use of a number of children scripts to do much of the heavy lifting. Namely, displays to display the content and generators to generate dynamic content for these displays, see the displays and generators directories in the script directory for examples. There are a number of other utilities and handlers used, that can be found in the similarly named directories.

Most of the information presented is fetched from an API, which was purpose designed to build this site.

Note: One needs to have a `config.js` file in the root directory if you would like to experience the pay button easter egg. It involves a call to a free api on RapidApi, so your relevant key is included here.

```js
const _s_n_o_i_t_p_o_ = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    "X-RapidAPI-Key": "<YOUR_KEY_HERE>",
  },
};

export { _s_n_o_i_t_p_o_ };
```

## Design

### Discount Banner

![Discount Banner](https://user-images.githubusercontent.com/69891978/161719850-70068182-d899-42fc-b9a3-660a17c797f7.png "Discount Banner")

### Header

![Header](https://user-images.githubusercontent.com/69891978/161712364-bd0996ff-8d0f-4e1f-889a-1930c93f37d7.png "Header")

### Product List

![Product List](https://user-images.githubusercontent.com/69891978/161723124-be83e32f-31d2-4cb0-ae6e-5e139e8dcc09.png "Product List")

### Footer

![Footer](https://user-images.githubusercontent.com/69891978/161718943-93a78d17-3ba7-4912-be66-6c3b45f39b59.png "Footer")

### Single Product Page

![Single Product Page](https://user-images.githubusercontent.com/69891978/162163830-1d1677a0-0b7a-4454-900b-5d52baa302f2.png "Single Product Page")

### Checkout Page

#### With Items

![Checkout Page](https://user-images.githubusercontent.com/69891978/164212306-73277600-f9bf-4515-9529-4c167dc8c374.png "Checkout Page")

### Empty

![Checkout Page](https://user-images.githubusercontent.com/69891978/164212457-ac743ea1-2868-4694-9f11-ddab8653a06a.png "Checkout Page")
