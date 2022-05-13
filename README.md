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

## Design

### Home Page

![Home Page](https://user-images.githubusercontent.com/69891978/164219155-9e12ff5b-1d78-4138-8b2e-ff87fc593da5.png "Home Page")

### Single Product Page

![Single Product Page](https://user-images.githubusercontent.com/69891978/164219465-78202494-06c9-4d03-aba9-177e18ab36bd.png "Single Product Page")

### Checkout Page

#### With Items

![Checkout Page](https://user-images.githubusercontent.com/69891978/164212306-73277600-f9bf-4515-9529-4c167dc8c374.png "Checkout Page")

#### Empty

![Checkout Page](https://user-images.githubusercontent.com/69891978/164212457-ac743ea1-2868-4694-9f11-ddab8653a06a.png "Checkout Page")
