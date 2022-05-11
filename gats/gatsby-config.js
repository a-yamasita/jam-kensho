const path = require("path/posix");

module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      }
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'https://wp.jam-kensho/graphql',
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'wp.jam-kensho',
        short_name: 'wp.jam-kensho',
        description: 'WordPress JAMStack Proof of Concept',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#40c246',
        display: 'standalone',
        icon: `src/images/icon.png`,
       },
     },
     'gatsby-transformer-sharp',
     'gatsby-plugin-sharp',
     'gatsby-plugin-offline'
  ],

  siteMetadata: {
    title: "wp.jam-kensho",
    titleTemplate: "%s - wp.jam-kensho",
    description:
      "WordPress JAMStack Proof of Concept",
    url: "https://wp.jam-kensho", // No trailing slash allowed!
    image: "images/icon.png", // Path to the image placed in the 'static' folder, in the project's root directory.
    //twitterUsername: "",
  },
};
