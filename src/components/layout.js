import React, {useState} from "react"
import {useStaticQuery, graphql} from "gatsby"
import Alert from "../components/alert"
import Footer from "../components/footer"

import 'prismjs/themes/prism-okaidia.css';

export const MenuContext = React.createContext({});

export default ({children}) => {
    const [menuOpen, setMenuOpen] = useState(false)

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
        <MenuContext.Provider value={{menuOpen: menuOpen, setMenuOpen: setMenuOpen}}>
            <div className={`site-wrapper ${menuOpen && 'fixed'}`}>
                <Alert link={"/coronavirus"}/>
                {children}
            </div>
            <Footer/>
        </MenuContext.Provider>
    )
}
