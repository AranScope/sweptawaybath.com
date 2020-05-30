import React from "react"
import "../styles/global.css"

export default ({ children, imageUrl }) => (
    <div className="bg-center bg-cover"
         style={{
             backgroundImage: `url(${imageUrl})`
         }}>
        <div className="container px-2 mx-auto">
            {children}
        </div>
    </div>
)