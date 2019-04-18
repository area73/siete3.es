import React from "react"
import Header from "../components/Header.js"

import { Location } from "@reach/router"

const MainLayout = ({props, location}) => {
  return (
    <div>
      <Header location={location} />
      <hr />
      <div>{props.children}</div>
      <hr />
    </div>
  )
}

const Layout = props => {
  return (
    <Location>
      {({ location }) => {
        return <MainLayout location={location} props={props} />
      }}
    </Location>
  )
}
export default Layout
