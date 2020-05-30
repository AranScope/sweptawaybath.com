import React from "react"
import "../styles/global.css"

export default ({children, imageUrl}) => (
    <div className="bg-center bg-cover"
         style={{
             backgroundImage: `url(${imageUrl})`,
         }}>
        <div className="p-6" style={{width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(2px)"}}>
            <div className="container mx-auto">
                {children}
            </div>
        </div>
    </div>
)