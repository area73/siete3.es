import React from "react"
import { StaticQuery, graphql } from "gatsby"
import TitleAndDescription from "./ TitleAndDescription.js"
import HeaderMenu from "./HeaderMenu.js"
import Search from "./Search.js"

const Header = ({location}) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={HeaderContent(location)}
    />
  )
}

const HeaderContent = location => data => {
  return (
    <>
      <TitleAndDescription data={data}/>
      <HeaderMenu location={location}/>
      <Search/>
    </>
  )
}

export default Header
