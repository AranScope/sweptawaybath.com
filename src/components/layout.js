import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import Header from "../components/header"
import Alert from "../components/alert"
import Footer from "../components/footer"
import Quote from "../components/quote"

import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
        <Alert/>
      {children}
      <Footer/>
    </div>
  )
}
