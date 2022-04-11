/** * Fetch data from a URL. * @param {string} url URL to fetch resources from. * @returns JSON data from the URL. */ async function doFetch(
  url
) {
  try {
    const data = await fetch(url);
    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
export { doFetch };
