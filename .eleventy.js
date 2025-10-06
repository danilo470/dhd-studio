const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("dhd-images");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("blog.css");
  eleventyConfig.addPassthroughCopy("script.js");
  

  // // Add the watch target for your sections folder
  eleventyConfig.addWatchTarget("/_includes/sections");
  eleventyConfig.addWatchTarget("../tailwind.css");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
   return {
    dir: {
      input: ".",      // assuming you're working from root
      output: "/_site"  // default output folder
    }
  };
};