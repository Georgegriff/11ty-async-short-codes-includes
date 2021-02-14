module.exports = (eleventyConfig) => {

    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addNunjucksAsyncShortcode("Image", async (src) => {
        return `<img src="${src}"/>`
      });

      eleventyConfig.addNunjucksShortcode("ImageSync", (src) => {
        return `<img src="${src}"/>`
      });

      return {
        templateFormats: [
            "md",
            "njk",
            "html",
            "liquid"
        ],
        markdownTemplateEngine: "njk",
      }
};