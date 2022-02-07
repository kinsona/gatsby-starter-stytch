import React from "react"
import "./layout.css"

import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  return (
    <div>
      <Helmet htmlAttributes={{ lang : "en" }}>
        <meta charSet="utf-8" />
        <title>Gatsby Starter Stytch</title>
        <link rel="canonical" href="https://gatsbystarterstytchmain.gatsbyjs.io/" />
      </Helmet>
      {children}
    </div>
  )
}
