import React from "react"
import SideBySide from "./sideBySide"
import CoverageMap from "./coverageMap"

export default ({leftTitle, leftBody, leftIncludesMap, rightTitle, rightBody, rightIncludesBookButton}) => (
    <SideBySide>
        <>
            <h1 className="text-gray-900 text-3xl md:text-5xl leading-tight font-extrabold"
                style={{fontFamily: "Nunito Sans"}}>{leftTitle}</h1>
            {leftBody && (
                <p className="text-gray-600 text-xl font-serif leading-loose">{leftBody}</p>
            )
            }
            {leftIncludesMap && (
                <CoverageMap/>
            )}
        </>
        <>
            <h2><a
                className="text-gray-900 md:text-gray-700 text-2xl leading-tight font-extrabold md:font-semibold  md:text-base md:uppercase"
                style={{fontFamily: "Nunito Sans"}}>{rightTitle}</a></h2><br/>
            {rightBody && (
                <p className="text-gray-600 text-xl font-serif leading-loose">{rightBody}</p>
            )
            }
            {rightIncludesBookButton && (
                <button
                    className="border-solid border-2 border-orange-600 hover:bg-orange-600 hover:text-white text-orange-600 font-semibold py-4 my-8 px-8">BOOK
                    NOW
                </button>
            )}
        </>
    </SideBySide>
)