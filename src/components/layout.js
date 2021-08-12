import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
        <main style={{ minHeight: "150vh", background: "#f8f9fa"}}>
        {children}
        <div style={{ padding: "2rem", paddingTop: "300px",maxWidth: "400px", margin: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "500px" }}>
          <Link to="/alumni">Alumni Only Example</Link>
          <Link to="/med">Med Student, who completed a Brown Undergrad Example</Link>
          <Link to="/">Staff Member Example</Link>
        </div>
        </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
