const assets = require("./plugins/assets");
const filters = require("./filters");
const shortCodes = require("./shortcodes");

// Wrapper for custom bits for the Handbook.
module.exports = function HandbookPlugin(eleventyConfig) {
  // Asset building
  eleventyConfig.addPlugin(assets);

  // Filters
  eleventyConfig.addPlugin(filters);

  // Shortcodes
  eleventyConfig.addPlugin(shortCodes);
};
