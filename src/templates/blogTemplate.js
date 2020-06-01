import React, {useEffect, useState} from "react"
import Helmet from 'react-helmet';
import {graphql} from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header";
import Navigation from "../components/navigation";
import HeaderTitle from "../components/headerTitle";

export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                 }) {
    const {site, markdownRemark} = data // data.markdownRemark holds your post data
    const {siteMetadata} = site
    const {frontmatter, html} = markdownRemark

    const [copied, setCopied] = useState(false)

    return (
        <Layout>
            <Helmet>
                <title>{frontmatter.title} | {siteMetadata.title}</title>
                <meta name="description" content={frontmatter.metaDescription}/>
            </Helmet>
            <div className="blog-post-container">
                <Header
                    imageUrl={frontmatter.thumbnail || "https://images.squarespace-cdn.com/content/56ec101db09f95da37e77918/1458317460088-Z27X14MAB5X7CAC0DBOG/SQS_DK_carlos_0226-e.jpg?format=2500w&content-type=image%2Fjpeg"}>
                    <Navigation/>
                    <HeaderTitle>{frontmatter.title}</HeaderTitle>
                    <div className={"relative"} style={{top: "1.6rem"}}>
                        <div className={"flex justify-center md:justify-start -my-6"}>
                            <a
                                target={"_blank"}
                                href={"https://www.facebook.com/sharer/sharer.php?u=" + "http://sweptawaybath.com"}
                                className="flex items-center shadow-md bg-facebook hover:bg-blue-700 text-white py-2 px-6 mx-2">
                                <span className={"font-bold text-2xl"}>f</span> <span className={"ml-4"}>SHARE</span>
                            </a>
                            <a
                                href={"javascript:void(0)"}
                                onClick={() => {
                                    if (typeof window !== "undefined" && window.navigator.share) {
                                        window.navigator.share({
                                            title: 'Swept Away Blog Post',
                                            url: 'https://sweptaway.netlify.app/blog'
                                        }).then(() => {
                                            console.log('Thanks for sharing!');
                                        })
                                            .catch(console.error);
                                    } else {
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
                                <span className={"ml-4"}>{typeof window !== "undefined" && window.navigator.share ? "SHARE" : copied ? "COPIED" : "COPY"}</span>
                            </a>
                        </div>
                    </div>
                </Header>


                <article className="container md:mx-auto p-5 md:py-20">
                    <div
                        className="blog-post-content text-2xl"
                        dangerouslySetInnerHTML={{__html: html}}
                    />
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