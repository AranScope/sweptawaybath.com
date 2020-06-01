import React from "react"

export default props => (
    <footer className="bg-gray-800">
        <p className="text-center py-4 text-gray-300">&copy; {new Date().getFullYear()} - Built with 🦕 by <a className="underline"
                                                                                        href="https://aran.site">aran.site</a>
        </p>
    </footer>
)