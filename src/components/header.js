import React from "react"
import "../styles/global.css"

export default ({children, imageUrl}) => (
    <div className="bg-center bg-cover"
         style={{
             backgroundImage: `url(${imageUrl})`,
         }}>
        <div style={{width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(2px)"}}>
            <div className="container px-2 mx-auto">
                {children}
            </div>
        </div>
    </div>
)