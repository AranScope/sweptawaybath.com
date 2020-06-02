import React, {useState} from "react"
import {Link} from "gatsby"
import Hamburger from "./hamburger"

export default ({title}) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [menuHidden, setMenuHidden] = useState(true)

    return (
        <nav className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0 text-white">
                <svg className="hidden md:block fill-current h-6 w-6 mr-3" xmlns="http://www.w3.org/2000/svg"
                     id="Capa_1"
                     enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512">
                    <g>
                        <g>
                            <path
                                d="m256 496c-130.907 0-256-79.37-256-120 0-51.172 105.25 0 256 0 150.244 0 256-51 256 0 0 41.447-126.384 120-256 120z"/>
                        </g>
                        <g>
                            <path
                                d="m90.81 286h330.38c-.13 6.23-.19 43.41-.19 43.41-52.6 8.04-103.03 16.59-165 16.59-61.28 0-110.42-8.31-165-16.61 0 0-.06-37.16-.19-43.39z"/>
                            <path
                                d="m450.55 64.64c-15.67 62.69-25.17 126.85-28.34 191.36h-332.42c-3.17-64.51-12.67-128.67-28.34-191.36-1.85-7.41 2.16-15.03 9.32-17.7 3.39-1.26 84.28-30.94 185.23-30.94s181.84 29.68 185.23 30.94c7.16 2.67 11.18 10.29 9.32 17.7z"/>
                        </g>
                    </g>
                </svg>
                <Link to={"/"}><h1
                    className="text-gray-300 font-semibold text-2xl hover:text-white leading-snug max-w-200px lg:max-w-unset">{title}</h1>
                </Link>
            </div>

            <Hamburger active={menuOpen} onClick={() => {
                if (menuOpen) {
                    // menu is being shut
                    document.querySelector("body").classList.remove("fixed")
                    setTimeout(() => {
                        setMenuHidden(true)
                    }, 100)
                } else {
                    document.querySelector("body").classList.add("fixed")
                    setMenuHidden(false)
                }

                setMenuOpen(!menuOpen)

            }}/>


            <ul className="md:flex md:flex-row items-center hidden">
                <li key="home"
                    className="text-gray-300 md:mr-6 font-semibold text-4xl md:text-base my-4 md:my-0 hover:text-white">
                    <Link to="/">HOME</Link>
                </li>
                <li key="prices"
                    className="text-gray-300 md:mr-6 font-semibold text-4xl md:text-base my-4 md:my-0 hover:text-white">
                    <Link to="/prices">PRICES</Link>
                </li>
                <li key="blog"
                    className="text-gray-300 md:mr-6 font-semibold text-4xl md:text-base my-4 md:my-0 hover:text-white">
                    <Link to="/blog">BLOG</Link>
                </li>
                <li key="reviews"
                    className="text-gray-300 md:mr-16 font-semibold text-4xl md:text-base my-4 md:my-0 hover:text-white">
                    <Link to="/reviews">REVIEWS</Link>
                </li>
                <li key="book-now">
                    <a
                        href={"/book"}
                        className="pointer inline-block bg-orange-600 text-white font-semibold py-4 px-8 text-4xl my-4 md:my-0 md:text-base">BOOK
                        NOW
                    </a>
                </li>
            </ul>

            <div className={`flex items-center justify-center md:hidden ${menuOpen ? `` : `menu-hidden`} ${menuHidden && 'hidden'}`} id={"mobile-nav"}>
                <ul className={"flex flex-col items-center"}>
                    <li key="home"
                        className="text-gray-800 md:mr-6 font-semibold text-3xl md:text-base my-2 md:my-0 hover:text-white">
                        <Link to="/">HOME</Link>
                    </li>
                    <li key="prices"
                        className="text-gray-800 md:mr-6 font-semibold text-3xl md:text-base my-2 md:my-0 hover:text-white">
                        <Link to="/prices">PRICES</Link>
                    </li>
                    <li key="blog"
                        className="text-gray-800 md:mr-6 font-semibold text-3xl md:text-base my-2 md:my-0 hover:text-white">
                        <Link to="/blog">BLOG</Link>
                    </li>
                    <li key="reviews"
                        className="text-gray-800 md:mr-16 font-semibold text-3xl md:text-base my-2 md:my-0 hover:text-white">
                        <Link to="/reviews">REVIEWS</Link>
                    </li>
                    <li key="book-now">
                        <button
                            className="bg-orange-600 text-white font-semibold py-4 px-8 text-3xl my-2 md:my-0 md:text-base">BOOK
                            NOW
                        </button>
                    </li>
                </ul>
            </div>
        </nav>

    );
}