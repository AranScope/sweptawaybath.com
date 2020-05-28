import React from "react"
import "../styles/global.css"

export default ({ children }) => (
    <div className="bg-center bg-cover"
         style={{
             backgroundImage: "url(https://images.squarespace-cdn.com/content/56ec101db09f95da37e77918/1458317460088-Z27X14MAB5X7CAC0DBOG/SQS_DK_carlos_0226-e.jpg?format=2500w&content-type=image%2Fjpeg)"
         }}>
        <div className="container px-2 mx-auto">
            {children}
        </div>
    </div>
)