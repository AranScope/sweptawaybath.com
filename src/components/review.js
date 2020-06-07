import React from "react"
import {Link} from "gatsby"

export default ({review}) => (
    <div className="p-8">
        <div className={"flex"}>
            <div className={"hidden md:block"}>
                <p className={"font-serif text-transparent text-6xl text-stroke"} style={{fontSize: "12rem"}}>“</p>
            </div>
            <div className={"block"}>
                <p className="text-gray-700 text-center text-3xl md:text-3xl mb-8">{review.body}</p>
                <p className="text-gray-600 font-serif text-center text-xl md:text-2xl mb-8">{review.customer_name} - {review.date}</p>
                <div className={"flex items-center text-gray-600"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                         width="24" height="24"><path className="fill-current"
                                                      d="M19.48 13.03A4 4 0 0 1 16 19h-4a4 4 0 1 1 0-8h1a1 1 0 0 0 0-2h-1a6 6 0 1 0 0 12h4a6 6 0 0 0 5.21-8.98L21.2 12a1 1 0 1 0-1.72 1.03zM4.52 10.97A4 4 0 0 1 8 5h4a4 4 0 1 1 0 8h-1a1 1 0 0 0 0 2h1a6 6 0 1 0 0-12H8a6 6 0 0 0-5.21 8.98l.01.02a1 1 0 1 0 1.72-1.03z"/></svg>
                    <a className={"text-center text-xl"} href={"google.com"}>View in Google</a>
                </div>
            </div>
        </div>
    </div>
)