import Layout from "../../components/layout";
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import HeaderTitle from "../../components/headerTitle";
import React from "react";
import ReactMarkdown from "react-markdown"

const BlogPostTemplate = ({title, thumbnail, html}) => (
    <Layout>
        <div className="blog-post-container">
            <Header
                imageUrl={thumbnail}>
                <Navigation/>
                <HeaderTitle>{title}</HeaderTitle>
                <div className={"relative"} style={{top: "1.6rem"}}>
                    <div className={"flex justify-center md:justify-start -my-6"}>
                        <a
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                            href={`https://www.facebook.com/sharer/sharer.php?u=asd`}
                            className="flex items-center shadow-md bg-facebook hover:bg-blue-700 text-white py-2 px-6 mx-2">
                            <span className={"font-bold text-2xl"}>f</span> <span className={"ml-4"}>SHARE</span>
                        </a>
                        <button
                            className="flex items-center shadow-md bg-gray-100 hover:bg-white text-gray-800 py-2 px-6 mx-2">
              <span className={"font-bold text-2xl"}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                          width="24" height="24"><path className="fill-current"
                                                                                       d="M19.48 13.03A4 4 0 0 1 16 19h-4a4 4 0 1 1 0-8h1a1 1 0 0 0 0-2h-1a6 6 0 1 0 0 12h4a6 6 0 0 0 5.21-8.98L21.2 12a1 1 0 1 0-1.72 1.03zM4.52 10.97A4 4 0 0 1 8 5h4a4 4 0 1 1 0 8h-1a1 1 0 0 0 0 2h1a6 6 0 1 0 0-12H8a6 6 0 0 0-5.21 8.98l.01.02a1 1 0 1 0 1.72-1.03z"/></svg></span>
                            <span
                                className={"ml-4"}>{"COPY"}</span>
                        </button>
                    </div>
                </div>
            </Header>


            <article className="container md:mx-auto p-5 md:py-20">
                <ReactMarkdown className={"blog-post-content text-2xl"} source={html}/>
                <iframe
                    title="Facebook like button"
                    src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FSwept-Away-Chimney-Sweep-300577559972619%2F&width=92&layout=button_count&action=like&size=large&share=false&height=21&appId=516040375545244"
                    width="92" height="40" style={{border: "none", overflow: "hidden"}} scrolling="no"
                    frameBorder="0"
                    allowTransparency="true" allow="encrypted-media"/>
            </article>
        </div>
    </Layout>
)

export default ({entry, getAsset, widgetFor}) => {
    return (
        <BlogPostTemplate
            title={entry.getIn(['data', 'title'])}
            thumbnail={getAsset(entry.getIn(['data', 'thumbnail']))}
            html={entry.getIn(['data', 'body'])}
        />
    )
}