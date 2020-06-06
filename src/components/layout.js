import React, {useState} from "react"
import {useStaticQuery, graphql} from "gatsby"
import Alert from "../components/alert"
import Footer from "../components/footer"

import 'prismjs/themes/prism-okaidia.css';

export const MenuContext = React.createContext({});

export default ({children}) => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <MenuContext.Provider value={{menuOpen: menuOpen, setMenuOpen: setMenuOpen}}>
            <div className={`site-wrapper w-screen ${menuOpen ? 'fixed': ''}`}>
                <Alert/>
                {children}
            </div>
            <Footer/>
        </MenuContext.Provider>
    )
}
