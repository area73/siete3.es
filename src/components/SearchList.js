import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import CustomExcert from "./CustomExcert.js"

const SearchList = ({results, searchTerm}) =>{
  return (
    <ul>
      {results.map(page => (
        <li key={page.id}>
          <div style={{ display: 'inline-block', border:'1px solid red', width:'25%', verticalAlign:'top'}}>
            <p>TITLE: <Link to={"/" + page.path}>{page.title}</Link></p>
            <p>TAGS: {page.tags.join(`,`)}</p>
            <p>CATEGORIES: {page.categories.join(`,`)}</p>
          </div>
          <div style={{ display: 'inline-block', border:'1px solid red'}}>
            <CustomExcert html={page.html} searchTerm={searchTerm}/>
          </div>
        </li>
      ))}
    </ul>
  )
}

SearchList.propTypes = {
  results: PropTypes.array,
  searchTerm: PropTypes.string
}

export default SearchList
