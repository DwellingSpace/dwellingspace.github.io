module.exports = function(eleventyConfig) {

  // css, images and standalone scripts
  eleventyConfig.addPassthroughCopy("static");	

  eleventyConfig.addPassthroughCopy("CNAME");

  return {
    passthroughFileCopy: true
  };
};
