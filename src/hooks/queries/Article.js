import { useStaticQuery, graphql } from "gatsby"

export const useAllArticlesQuery = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query ArticlesQuery {
        allMarkdownRemark(
          filter: { frontmatter: { draft: { eq: false } } }
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              excerpt
              frontmatter {
                title
                date
                draft
                path
                tags
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
