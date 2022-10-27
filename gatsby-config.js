module.exports = {
  pathPrefix: `futureweb`,
  siteMetadata: {
    title: 'Site title',
    description: 'Site description',
    siteUrl: 'https://mwebs.pl',
    author: 'Mateusz Woskowicz',
    keywords: 'keyword1,keyword2',
    image: 'link to the image'
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
    'gatsby-plugin-react-helmet',
  ],
};


