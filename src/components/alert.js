import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby";

export default props => {
    const data = useStaticQuery(
        graphql`
            query {
                homePageJson {
                    header {
                        alert {
                            badge
                            text
                            link
                            enabled
                        }
                    }
                }
            }
        `
    )

    const alert = data.homePageJson.header.alert

    if (!alert.enabled) {
        return <></>
    }

    return (
        <div className="bg-indigo-900 text-center py-4 px-2 md:px-4">
            <Link to={alert.link} title={alert.text} ariaLabel={alert.text}>
                <div
                    className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none md:rounded-full flex lg:inline-flex hover:bg-indigo-700"
                    role="alert">
                    <span
                        className="flex rounded-full bg-indigo-600 text-white uppercase px-2 py-1 text-xs font-bold mr-3">{alert.badge}</span>
                    <span className="font-semibold mr-2 text-left flex-auto">{alert.text}</span>
                    <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20">
                        <path
                            d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
                    </svg>
                </div>
            </Link>
        </div>
    )
}

