import React from "react"

export default ({children}) => (
    <div className="container mx-auto pb-5 md:pb-10">
        <div className="md:flex">
            <div className="md:w-3/4 md:pr-20">
                {children}
            </div>
        </div>
    </div>
)