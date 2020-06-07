import React, {useState} from "react"
import Footer from "../components/footer"

export const MenuContext = React.createContext({});

export default ({children}) => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <MenuContext.Provider value={{menuOpen: menuOpen, setMenuOpen: setMenuOpen}}>
            <div className={`site-wrapper overflow-x-hidden w-screen ${menuOpen ? 'fixed': ''}`}>
                {children}
            </div>
            <Footer/>
        </MenuContext.Provider>
    )
}
