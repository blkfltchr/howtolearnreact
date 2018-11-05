const path = require(`path`)

const createTagPages = (createPage, pages) => {
  const allTagsIndexTemplate = path.resolve('src/templates/allTagsIndex.js')
  const singleTagIndexTemplate = path.resolve('src/templates/singleTagIndex.js')

  const postsByTag = {}

  pages.forEach(({node}) => {
    if (node.tags) {
      node.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = []
        }

        postsByTag[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTag)

  createPage({
    path: '/tags',
    component: allTagsIndexTemplate,
    context: {
      tags: tags.sort()
    }
  })

  tags.forEach(tagName => {
    const posts = postsByTag[tagName]
    
    createPage({
      path: `/tags/${tagName}`,
      component: singleTagIndexTemplate,
      context: {
        posts,
        tagName
      }
    })
  }) 

}

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

      createTagPages(createPage, pages)

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

  return Promise.all([loadPosts, loadPages])
}