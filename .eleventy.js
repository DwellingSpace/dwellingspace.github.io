module.exports = function(eleventyConfig) {

  // css, images and standalone scripts
  eleventyConfig.addPassthroughCopy("static");

  return {
    passthroughFileCopy: true
  };
};
