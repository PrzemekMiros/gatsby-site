module.exports = {
  pathPrefix: `futureweb`,
  siteMetadata: {
    title: "projekt",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `@react-icons/all-files`,
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        custom: [
          {
            name: ["Mulish", "MulishBold", "MulishExtraBold", "MulishSemiBold", "MulishBlack"],
            file: "src/style/fonts.css",
          },
        ],
      },
    },
  ],
};
