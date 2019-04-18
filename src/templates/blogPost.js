import React from "react"
import { graphql } from "gatsby"
import Layout from "../pages/layout.js"

const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext
  return (
    <Layout>
      <div>Blog Post</div>
      <div>
        {prev && prev.frontmatter.path} / {next && next.frontmatter.path}
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template
