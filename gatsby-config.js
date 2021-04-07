/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Koop Blog`,
    titleTemplate: `%s | A simple MDX blog`,
    description: `Built using GatsbyJS and serving content using markdown`,
    siteUrl: `https://koop-blog.netlify.app`, // Cannot include a trailing slash
    image: `/images/macbook.jpg`,
    twitterUsername: `@twitter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
}
