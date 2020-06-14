module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        // enable or disable gatsby-plugin-mdx
        mdx: false,
        // source directory
        contentPath: 'src',
        // base path for routes generate by this theme
        basePath: ''
      }
    }
  ]
}