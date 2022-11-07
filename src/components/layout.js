import React from "react"

import NavBar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return <><NavBar />{children}<Footer /></>
}

export default Layout
