const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost(
          sort: { fields: [date], order: ASC }
          limit: 10000
        ) {
          edges {
            node {
              slug
              date
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulBlogPost.edges
      const postsPerFirstPage = 6
      const postsPerPage = 6
      const numPages = Math.ceil(
        posts.slice(postsPerFirstPage).length / postsPerPage
      )

      // Create main home page
      createPage({
        path: `/`,
        component: path.resolve(`./src/pages/index.js`),
        context: {
          limit: postsPerFirstPage,
          skip: 0,
          numPages: numPages + 1,
          currentPage: 1,
        },
      })

      // Create additional pagination on home page if needed
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: `/${i + 2}/`,
          component: path.resolve(`./src/pages/index.js`),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage + postsPerFirstPage,
            numPages: numPages + 1,
            currentPage: i + 2,
          },
        })
      })

      // Create each individual post
      posts.forEach(({node}, index) => {
        // const slug = node.slug
        createPage({
          path: node.slug, 
          component: path.resolve(`./src/templates/blogPost.js`),
          context: {
            pathSlug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  // const loadAllTags = new Promise((resolve, reject) => {
  //   graphql(`
  //     {
  //       allContentfulTag {
  //         edges {
  //           node {
  //             slug
  //             }
  //           }
  //         }
  //       }    
  //   `).then(result => {
  //     const allTags = result.data.allContentfulTag.edges

  //     allTags.map(({ node }, index) => {
  //       createPage({
  //         path: '/tags',
  //         component: path.resolve('src/templates/allTagsIndex.js'),
  //         context: {
  //           pathSlug: node.slug
  //         }
  //       })
  //     })
  //   })  
  // })

  
  const loadTags = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulTag {
          edges {
            node {
              slug
              posts {
                id
                slug
                title
              }
            }
          }
        }
      }
    `).then(result => {
      const tags = result.data.allContentfulTag.edges
      const postsPerPage = 6
  
      // Create tag pages with pagination if needed
      tags.map(({ node }) => {
        const totalPosts = node.posts !== null ? node.posts.length : 0
        const numPages = Math.ceil(totalPosts / postsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path:
              i === 0 ? `/tags/${node.slug}/` : `/tags/${node.slug}/${i + 1}/`,
            component: path.resolve(`./src/templates/singleTagIndex.js`),
            context: {
              pathSlug: node.slug,
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages: numPages,
              currentPage: i + 1,
            },
          })
        })
      })
      resolve()
    })
  })

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const pages = result.data.allContentfulBlogPost.edges

      pages.map(({ node }, index) => {
        createPage({
          path: `${node.slug}`,
          component: path.resolve(`./src/templates/blogPost.js`),
          context: {
            pathSlug: node.slug,
            prev: index === 0 ? null : pages[index - 1].node,
            next: index === (pages.length - 1) ? null : pages[index + 1].node,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([loadPosts, loadPages, loadTags ]) // loadAllTags
}