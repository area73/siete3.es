import React from "react"
import { Link } from "gatsby"
import Layout from "../pages/layout.js"

const SingleTagTemplate = ({ pageContext }) => {
  const { filteredPosts, tagName } = pageContext
  return (
    <Layout>
      <div>Posts about {`${tagName}`}</div>
      <div>
        <ul>
          {filteredPosts.map((post, index) => {
            return (
              <li key={index}>
                <Link to={post.node.frontmatter.path}>
                  {post.node.frontmatter.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default SingleTagTemplate
