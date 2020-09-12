module.exports = function (eleventyConfig) {
  // eleventyConfig.addLayoutAlias("about", "layouts/about.html");
  eleventyConfig.addLayoutAlias("book", "layouts/book.html");
  eleventyConfig.addLayoutAlias("book", "layouts/books.html");
  eleventyConfig.addLayoutAlias("default", "layouts/default.html");
  eleventyConfig.addLayoutAlias("home", "layouts/home.html");
  eleventyConfig.addLayoutAlias("page", "layouts/page.html");
  eleventyConfig.addLayoutAlias("post", "layouts/post.html");
  eleventyConfig.addLayoutAlias("posts", "layouts/posts.html");
  return {
    dir: {
      input: "./", // Equivalent to Jekyll's source property
      output: "./public", // Equivalent to Jekyll's destination property
    },
  };
};
