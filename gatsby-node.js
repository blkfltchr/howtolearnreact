const path = require(`path`)
const _ = require('lodash')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost(
          sort: { fields: [createdAt], order: ASC }
          limit: 10000
        ) {
          edges {
            node {
              slug
              createdAt
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulBlogPost.edges
      const numPages = Math.ceil(
        posts.length / 4
      )

      // Create additional pagination on home page if needed
      Array.from({ length: numPages }).forEach((_, index) => {
        createPage({
          path: index === 0 ? `/` : `/${index + 1}`,
          component: path.resolve(`./src/pages/index.js`),
          context: {
            limit: 4,
            skip: (index * 4),
            numPages,
            currentPage: (index + 1),
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
  
  const loadTags = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulTag {
          edges {
            node {
              slug
              posts {
                slug
                title
              }
            }
          }
        }
      }
    `).then(result => {
      const tags = result.data.allContentfulTag.edges
  
      // Create tag pages with pagination if needed
      tags.map(({ node }) => {
        const numPages = Math.ceil(
          node.posts.length / 3
          )
        Array.from({ length: numPages }).forEach((_, index) => {
          createPage({
            path: index === 0 ? `/tags/${node.slug}` : `/tags/${node.slug}/${index + 1}`,
            component: path.resolve(`./src/templates/singleTagIndex.js`),
            context: {
              pathSlug: node.slug,
              limit: 3,
              skip: (index * 3),
              numPages,
              currentPage: (index + 1),
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

  return Promise.all([loadPosts, loadPages, loadTags ])
}