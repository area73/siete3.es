import { useStaticQuery, graphql } from "gatsby"

export const useAllCategoriesQuery = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query CategoriesQuery {
        allMarkdownRemark(
          filter: { frontmatter: { draft: { eq: false } } }
          sort: { order: DESC, fields: [frontmatter___categories] }
        ) {
          edges {
            node {
              excerpt
              frontmatter {
                categories
              }
            }
          }
        }
      }
    `,
  )
  return allMarkdownRemark.edges;
}
