/**
 * Removes parameters from a URL.
 * @param {string} url The URL to process.
 * @return The URL without parameters.
 * @customfunction
 */

function REMOVE_URL_PARAMETERS(url) {
  if (!url) return url;
  var mainUrl = url.split('?')[0];
  return mainUrl;
}
