import React from "react"
import StarRating from "../components/starRating"


// each para spaced by mb-6

export default ({review}) => (
    <div className="border-l-8 border-purple-muted w-full max-w-2xl shadow-md mb-10 bg-white">

        <div className="p-12 md:pl-0 flex min-w-full">
            <p className="hidden md:block font-sans leading-none min-h-full text-gray-200 px-4 -mt-8"
               style={{fontSize: "11rem"}}>
                “
            </p>

            <div className="font-serif-merriweather">
                <div className="card-body-text font-light italic leading-relaxed text-gray-900 mb-8 text-xl"
                     dangerouslySetInnerHTML={{__html: review.html}}/>
                <div className="flex justify-between mt-8">
                    <p className="text-gray-600">{review.frontmatter.customer_name} - {review.frontmatter.date}</p>
                    <div className="flex text-gray-500">
                        <svg className="hidden md:block" style={{minHeight: "1rem", minWidth: "1rem"}}
                             fill="currentColor"
                             viewBox="0 0 20 20">
                            <path
                                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                            <path
                                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                        </svg>
                        <a href={review.frontmatter.link}>Open in Google</a>
                    </div>
                </div>
                <div className={"pt-2"}>
                    <StarRating stars={review.frontmatter.stars}/>
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
)