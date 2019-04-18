import { useStaticQuery, graphql } from "gatsby"

export const useSearchIndex = () => {
  const { siteSearchIndex } = useStaticQuery(
    graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `,
  )
  return siteSearchIndex.index;
}
