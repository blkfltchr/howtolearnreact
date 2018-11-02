module.exports = {
    siteMetadata: {
      title: 'How To Learn React',
      description: 'These tutorials will give you a deeper understanding of React.js. Learn with examples from the Javascript UI library, covering the basics and the advanced.'
    },
    plugins: [
      `gatsby-transformer-remark`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-styled-components`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: `${__dirname}/src/pages`
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        }
      }
    ]
  }