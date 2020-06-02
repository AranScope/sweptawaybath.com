import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Alert from "../components/alert"
import Footer from "../components/footer"

import 'prismjs/themes/prism-okaidia.css';

export default ({children}) => {
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
            <Alert link={"/coronavirus"}/>
            {children}
            <Footer/>
        </div>
    )
}
