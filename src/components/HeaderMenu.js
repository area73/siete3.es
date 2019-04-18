import React from "react"
import { Link } from "../../.cache/gatsby-browser-entry.js"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import AppBar from "@material-ui/core/AppBar"

const HeaderMenu = ({location}) => {
  return (
    <AppBar position="static" color="default">
      <Tabs
        onChange={null}
        value={location.pathname}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        {/*
        <Tab label="Home"  value="/" component={Link} to="/" />
        <Tab label="Articles" value="/articles" component={Link} to="/articles"/>
        <Tab label="Tags" value="/tags" component={Link} to="/tags"/>
        <Tab label="Categories" value="/categories" component={Link} to="/categories"/>
*/}
        <Tab label="Home"  value="/" component={Link} to={"/"} />
        <Tab label="Articles" value="/articles" component={Link} to={"/articles"}/>
        <Tab label="Tags" value="/tags" component={Link} to={"/tags"}/>
        <Tab label="Categories" value="/categories" component={Link} to={"/categories"}/>

      </Tabs>
    </AppBar>


    /*
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/articles"}>Articles</Link>
        </li>
        <li>
          <Link to={"/tags"}>Tags</Link>
        </li>
        <li>
          <Link to={"/categories"}>Categories</Link>
        </li>
      </ul>
    </nav>
    */

  )
}
export default HeaderMenu


