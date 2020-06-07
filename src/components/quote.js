import React from "react"

export default ({body, author}) => (
    <div className="py-12 md:py-32">
        <div className="text-gray-100 font-extrabold text-center bigquote text-3xl md:text-6xl text-shadow"
             dangerouslySetInnerHTML={{__html: body}}/>
        <p className="text-gray-300 text-center text-xl md:text-2xl mt-8 text-shadow"><i>- {author}</i></p>
    </div>

)