/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "The Routine",
    description: "A blog for the beauty brand Journ.",
    author: "Catalog",
    twitterUsername: "@trycatalog",
    image: "/yellow-metal-design-decoration.jpg",
    siteUrl: "https://ourjourn.com",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-svg`,
    // {
    //   resolve: "gatsby-plugin-react-svg",
    //   options: {
    //     rule: {
    //       include: /images/ // See below to configure properly
    //     }
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `0qk1wy91xggs`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `iSAj7oj9VzQ8vmwuaOJGo9pa1FM8s10FMbsmMJM6SKQ`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://barcadia.netlify.com",
        sitemap: "https://barcadia.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    // {
    //   resolve: "gatsby-plugin-transition-link",
    //   options: {
    //       layout: require.resolve(`./src/components/Layout.js`)
    //     }
    // }
  ],
}
