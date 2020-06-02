import React from "react"

export default ({onClick, active}) => {
    let color = active ? 'gray-700' : 'gray-100'

    return (
        <button id="hamburger-button" onClick={onClick}
                className={`focus:outline-none md:hidden flex items-center px-3 py-2 border rounded text-${color} border-${color} z-10 md:z-0`}>

            {active && (
                <div className={"flex items-center"}>
                    <svg className={`fill-current text-${color} h-6 w-6`} xmlns="http://www.w3.org/2000/svg"
                         height="365.696pt" viewBox="0 0 365.696 365.696" width="365.696pt">
                        <path
                            d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"/>
                    </svg>
                    <p className={`text-xl text-${color} font-semibold ml-3`}>MENU</p>
                </div>
            )}
            {!active && (
                <div className={"flex items-center"}>
                    <svg className={`fill-current text-${color} h-6 w-6`} viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                    <p className={`text-xl text-${color} font-semibold ml-3`}>MENU</p>
                </div>
            )}

        </button>
    );
}