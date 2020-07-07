const redish = `#4d999c`

module.exports = {
  siteMetadata: {
    title: "RK",
    author: "Luu Tuan Anh",
    homeCity: "Hanoi, Vietnam",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-171780598-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "RK",
        short_name: "RK",
        icon: "static/logo.png",
        start_url: "/",
        background_color: redish,
        theme_color: redish,
        display: "minimal-ui",
      },
    },
    `gatsby-plugin-offline`,
    // `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
  ],
}
