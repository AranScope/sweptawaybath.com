import React from "react"

function truncateString(s, maxLength) {
    if (s.length > maxLength) {
        return s.substring(0, maxLength) + "..."
    }

    return s
}

export default ({body, author}) => (
    <div className="py-16 md:py-64">
        <p className="text-gray-100 font-extrabold text-center bigquote text-3xl md:text-6xl text-shadow">{truncateString(body, 800)}</p>
        <p className="text-gray-300 text-center text-xl md:text-2xl mt-8 text-shadow"><i>- {author}</i></p>
    </div>
)