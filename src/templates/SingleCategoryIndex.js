import React from "react"
import { Link } from "gatsby"
import Layout from "../pages/layout.js"

const SingleCategoryTemplate = ({ pageContext }) => {
  const { filteredPosts, categoryName } = pageContext
  return (
    <Layout>
      <div>
        <div>Posts about {`${categoryName}`}</div>
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
      </div>
    </Layout>
  )
}

export default SingleCategoryTemplate
