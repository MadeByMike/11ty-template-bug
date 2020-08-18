module.exports = (eleventyConfig) => {
  process.env.ELEVENTY_EXPERIMENTAL = "true";
  eleventyConfig.addTemplateFormats("new");
  eleventyConfig.addExtension("new", {
    compile: (contentString, inputPath) => (props) =>
      "Test content - this gets included in the filename",
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
