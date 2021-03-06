require('dotenv').config()

const postQuery =`
{
    posts: allContentfulBlogPost {
      edges {
        node {
          objectID: id
          slug
          title
          tags
          body {
            body: childMarkdownRemark {
              excerpt
              headings {
                value
                depth
              }
            }
          }
        }
      }
    }
  }
`

const queries = [
    {
        query: postQuery,
        transformer: ({ data }) =>
            data.posts.edges.map(({ node }) => ({ node }))
    },
]
 
module.exports = {
    siteMetadata: {
      title: 'How To Learn React',
      description: 'These tutorials will give you a deeper understanding of React.js. Learn with examples from the Javascript UI library, covering the basics and the advanced.'
    },
    plugins: [
      "gatsby-transformer-remark",
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-styled-components",
      "gatsby-transformer-sharp",
      "gatsby-plugin-sharp",
      "gatsby-plugin-react-helmet",
      {
        resolve: "gatsby-source-contentful",
        options: {
          spaceId: "xgoskzm5h9or",
          accessToken: "d1b2d3210de2d87785ced9abd7ce66a64a4339d3c28fcee533956c74bb46ab88",
        }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "pages",
          path: `${__dirname}/src/pages`
        }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "images",
          path: `${__dirname}/src/images`,
        }
      },
      {
        resolve: "gatsby-plugin-algolia",
        options: {
          appId: "X04G7JBMWL",
          apiKey: "68c9d4898f0eec12443ec67ddd0a1cda",
          indexName: "POSTS",
          queries, 
          chunkSize: 10000
        }
      },
      {
        resolve: `gatsby-plugin-favicon`,
        options: {
          logo: "./src/favicon.png",
        }
      }
    ]
  }