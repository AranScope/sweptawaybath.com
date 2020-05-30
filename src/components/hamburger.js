import React from "react"

export default ({onClick}) => (
    <button id="hamburger-button" onClick={onClick}
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-100 border-gray-100 hover:text-white hover:border-white z-10 md:z-0">
        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
    </button>
)