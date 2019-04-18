import React from "react"
import PropTypes from "prop-types"

const processHtml = (html, searchTerm) =>
  html.replace(new RegExp(searchTerm,"gm"), `<mark>${searchTerm}</mark>`);


const CustomExcert = ({ html, searchTerm }) => {
  return (
    <>
      <div>{searchTerm}</div>
      <div dangerouslySetInnerHTML={{ __html: processHtml(html, searchTerm) }}/>
    </>
  )
}


CustomExcert.propTypes = {
  html: PropTypes.string.isRequired,
  searchTerm: PropTypes.string,
}
export default CustomExcert
