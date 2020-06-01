import React from "react"
import {Link} from "gatsby"

export default ({post, authorName, authorImage}) => (
    <Link to={post.frontmatter.path}>
        <div className="max-w-sm w-full lg:max-w-full lg:flex mb-6 md:mb-0">
            <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{backgroundImage: `url('${post.frontmatter.thumbnail || "https://images.squarespace-cdn.com/content/56ec101db09f95da37e77918/1458317460088-Z27X14MAB5X7CAC0DBOG/SQS_DK_carlos_0226-e.jpg?format=2500w&content-type=image%2Fjpeg"}')`}}>
            </div>
            <div
                className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">{post.frontmatter.title}</div>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div className="flex items-center">
                    <img
                        className="w-10 h-10 rounded-full mr-4" src={authorImage.image} alt={authorImage.alt}/>
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">{authorName}</p>
                        <p className="text-gray-600">{post.frontmatter.date}</p>
                    </div>
                </div>
            </div>
        </div>
    </Link>
)