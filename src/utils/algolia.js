const postQuery =`
{
    posts: allContentfulBlogPost {
      edges {
        node {
          objectID: id
          slug
          title
          date
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
            data.posts.edges.map(({ node: {body, ...rest} }) => ({
                ...body.data,
                ...rest,
            })),
            indexName: `Posts`,
            settings: { attributesToSnippet: [`excerpt:20`] },
    },
]

module.exports = queries