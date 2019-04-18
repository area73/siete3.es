import { useStaticQuery, graphql } from "gatsby"

export const useAllTagsQuery = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query TagsQuery {
        allMarkdownRemark(
          filter: { frontmatter: { draft: { eq: false } } }
          sort: { order: DESC, fields: [frontmatter___tags] }
        ) {
          edges {
            node {
              excerpt
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `,
  )
  return allMarkdownRemark.edges;
}
