import React, {useState} from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header";
import Navigation from "../components/navigation";
import HeaderTitle from "../components/headerTitle";
import SEO from "../components/seo";

export default function Template({
                                     data,
                                     location
                                 }) {
    const {site, markdownRemark} = data // data.markdownRemark holds your post data
    const {siteMetadata} = site
    const {frontmatter, html} = markdownRemark

    const [copied, setCopied] = useState(false)

    return (
        <Layout>
            <SEO title={frontmatter.title} description={frontmatter.metaDescription} image={frontmatter.thumbnail}/>
            <div className="blog-post-container">
                <Header
                    imageUrl={frontmatter.thumbnail || "https://images.squarespace-cdn.com/content/56ec101db09f95da37e77918/1458317460088-Z27X14MAB5X7CAC0DBOG/SQS_DK_carlos_0226-e.jpg?format=2500w&content-type=image%2Fjpeg"}>
                    <Navigation/>
                    <HeaderTitle>{frontmatter.title}</HeaderTitle>
                    <div className={"relative"} style={{top: "1.6rem"}}>
                        <div className={"flex justify-center md:justify-start -my-6"}>
                            <a
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                                href={`https://www.facebook.com/sharer/sharer.php?u=${location.href}`}
                                className="flex items-center shadow-md bg-facebook hover:bg-blue-700 text-white py-2 px-6 mx-2">
                                <span className={"font-bold text-2xl"}>f</span> <span className={"ml-4"}>SHARE</span>
                            </a>
                            <button
                                onClick={() => {
                                    if (typeof window !== "undefined" && window.navigator.share) {
                                        window.navigator.share({
                                            title: frontmatter.title,
                                            url: location.href
                                        }).then(() => {
                                            console.log('Thanks for sharing!');
                                        })
                                            .catch(console.error);
                                    } else {
                                        navigator.clipboard.writeText(location.href);
                                        setCopied(true)
                                        setTimeout(() => {
                                            setCopied(false)
                                        }, 5000)
                                    }
                                }}
                                className="flex items-center shadow-md bg-gray-100 hover:bg-white text-gray-800 py-2 px-6 mx-2">
              <span className={"font-bold text-2xl"}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                          width="24" height="24"><path className="fill-current"
                                                                                       d="M19.48 13.03A4 4 0 0 1 16 19h-4a4 4 0 1 1 0-8h1a1 1 0 0 0 0-2h-1a6 6 0 1 0 0 12h4a6 6 0 0 0 5.21-8.98L21.2 12a1 1 0 1 0-1.72 1.03zM4.52 10.97A4 4 0 0 1 8 5h4a4 4 0 1 1 0 8h-1a1 1 0 0 0 0 2h1a6 6 0 1 0 0-12H8a6 6 0 0 0-5.21 8.98l.01.02a1 1 0 1 0 1.72-1.03z"/></svg></span>
                                <span
                                    className={"ml-4"}>{typeof window !== "undefined" && window.navigator.share ? "SHARE" : copied ? "COPIED" : "COPY"}</span>
                            </button>
                        </div>
                    </div>
                </Header>


                <article className="container md:mx-auto p-5 md:py-20">
                    <div
                        className="blog-post-content text-2xl"
                        dangerouslySetInnerHTML={{__html: html}}
                    />
                    <iframe
                        className={"mt-8"}
                        title="Facebook like button"
                        src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FSwept-Away-Chimney-Sweep-300577559972619%2F&width=92&layout=button_count&action=like&size=large&share=false&height=21&appId=516040375545244"
                        width="92" height="40" style={{border: "none", overflow: "hidden"}} scrolling="no"
                        frameBorder="0"
                        allowTransparency="true" allow="encrypted-media"/>
                </article>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                thumbnail
                metaDescription
            }
        }
    }
`