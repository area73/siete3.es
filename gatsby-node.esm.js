import { GrepTags, GrepPostsByTags, GrepCategories, GrepPostsByCategories } from "./src/components/Grep.js"

const path = require("path")

const createTagPages = (createPage, posts) => {
  const singleTagIndexTemplate = path.resolve("src/templates/SingleTagIndex.js")
  const tags = GrepTags(posts)
  tags.forEach(tagName => {
    const filteredPosts = GrepPostsByTags(posts)(tagName)
    createPage({
      path: `/tags/${tagName}`,
      component: singleTagIndexTemplate,
      context: {
        filteredPosts,
        tagName,
      },
    })
  })
}

const createCategoriesPages = (createPage, posts) => {
  const singleCategoryIndexTemplate = path.resolve("src/templates/SingleCategoryIndex.js")
  const categories = GrepCategories(posts)
  categories.forEach(categoryName => {
    const filteredPosts = GrepPostsByCategories(posts)(categoryName)

    createPage({
      path: `/categories/${categoryName}`,
      component: singleCategoryIndexTemplate,
      context: {
        filteredPosts,
        categoryName,
      },
    })
  })
}

export const createPages = async ({ actions: { createPage }, graphql }) => {
  const blogPostTemplate = path.resolve("src/templates/blogPost.js")
  const result = await graphql(
    `query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    path
                    tags
                    title
                    categories
                  }
                }
              }
            }
          }
        `)
  if (result.error) {
    console.error("Something went wrong!")
    return
  }

  const posts = result.data.allMarkdownRemark.edges
  createCategoriesPages(createPage, posts)
  createTagPages(createPage, posts)
  posts.forEach(({ node }, index) => {
    const path = node.frontmatter.path
    createPage({
      path,
      component: blogPostTemplate,
      context: {
        pathSlug: path,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    })

  })
}
