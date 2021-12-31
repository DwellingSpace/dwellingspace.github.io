module.exports = function(eleventyConfig) {

  const moment = require("moment");
  moment.locale("en-gb");

  // css, images and standalone scripts

  eleventyConfig.addPassthroughCopy("static");

  eleventyConfig.addPassthroughCopy("CNAME");
  
  eleventyConfig.addPassthroughCopy("admin");

  // custom filters

  eleventyConfig.addLiquidFilter("formatDatePublished", function (value) {
    return moment(value).format("LL");
  });

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_alias: "blurb"
  });

  return {
    passthroughFileCopy: true
  };
};
