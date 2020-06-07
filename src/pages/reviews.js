import React from "react"
import {graphql, StaticQuery} from 'gatsby'
import Layout from "../components/layout"
import Navigation from "../components/navigation"
import Header from "../components/header"
import HeaderTitle from "../components/headerTitle"
import Container from "../components/container"
import Review from "../components/review";
import SEO from "../components/seo";

export default () => (
    <StaticQuery query={pageQuery} render={data => {
        return (
            <Layout className={"bg-gray-100"}>
                <SEO title={data.reviewsPageJson.metadata.title}
                     description={data.reviewsPageJson.metadata.description}
                     image={data.reviewsPageJson.metadata.image}/>
                <Header
                    imageUrl={data.reviewsPageJson.header.background_image}>
                    <Navigation/>
                    <HeaderTitle>{data.reviewsPageJson.header.title}</HeaderTitle>
                </Header>
                <Container>
                    <div className="container mx-auto my-6">

                        {
                            data.allMarkdownRemark.edges.map(e => e.node).map(review => (
                                <>
                                    <Review review={review}/>
                                </>
                            ))
                        }
                    </div>
                </Container>
            </Layout>
        )
    }}/>
)


const pageQuery = graphql`
    query reviewsPageQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: {fileAbsolutePath: {regex: "/testimonials/"}, frontmatter: {}}) {
            edges {
                node {
                    html
                    frontmatter {
                        date(formatString: "MMMM, YYYY")
                        customer_name
                        featured
                        stars
                        link
                    }
                }
            }
        }

        reviewsPageJson {
            metadata {
                title
                description
            }
            header {
                title
                background_image
            }
        }

        personalJson {
            profile_image {
                image
                alt
            }
            first_name
        }
    }
`