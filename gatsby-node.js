const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      posts: allContentfulBlogPost {
        edges {
          node {
            slug
            category {
              slug
              name
            }
          }
        }
      }
      categories: allContentfulBlogCategory {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `)

  data.categories.edges.forEach( ({ node }) => {
    // console.log(node.name)
    createPage({
      path: `${node.slug}`,
      component: path.resolve("./src/templates/blog-category-template.js"),
      context: {
        category: node.slug
      }
    })
  })

  data.posts.edges.forEach(({ node }) => {
    // console.log(node.slug)
    createPage({
      path: `${node.category.slug}/${node.slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })

  
  //Amount of posts
  const posts = data.posts.edges
  // Posts per page
  const postsPerPage = 6
  // How many pages
  const numPages = Math.ceil(posts.length / postsPerPage)

  // Array.from({ length: numPages }).forEach((_, i) => {
  //   createPage({
  //     path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
  //     component: path.resolve("./src/templates/blog-list-template.js"),
  //     context: {
  //       limit: postsPerPage,
  //       skip: i * postsPerPage,
  //       numPages,
  //       currentPage: i + 1,
  //     },
  //   })
  // })
}
