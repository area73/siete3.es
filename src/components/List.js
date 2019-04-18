import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const List = ({ list, path }) => {
  return (
    <ul>
      {list.map((tagName, index) => {
        return (
          <li key={index}>
            <Link to={`${path}${tagName}`}>{tagName}</Link>
          </li>
        )
      })}
    </ul>
  )
}

const CategoriesList = ({ list }) => List({ list, path: "/categories/" })
const TagsList = ({ list }) => List({ list, path: "/tags/" })

const ArticlesList = ({ list }) =>
  list.map((edge, idx) => (
    <div key={idx}>
      <Link to={`/${edge.node.frontmatter.path}`}>
        {edge.node.frontmatter.title}
      </Link>
      --> {edge.node.excerpt}
    </div>
  ))


List.propTypes = {
  list: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
}

export { CategoriesList, TagsList, ArticlesList }
