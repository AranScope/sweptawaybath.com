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
            <Layout>
                <SEO title={data.reviewsPageJson.metadata.title} description={data.reviewsPageJson.metadata.description}
                     image={data.reviewsPageJson.metadata.image}/>
                <Header
                    imageUrl={data.reviewsPageJson.header.background_image}>
                    <Navigation/>
                    <HeaderTitle>{data.reviewsPageJson.header.title}</HeaderTitle>
                </Header>
                <Container>
                    <div className="container mx-auto my-6">

                        {
                            data.allTestimonialsJson.edges.map(e => e.node).map(review => (
                                <>
                                    <Review review={review}/>
                                    <hr/>
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
        allTestimonialsJson(sort: { order: DESC, fields: [date] }) {
            edges {
                node {
                    customer_name
                    date(formatString: "MMM, YYYY")
                    link
                    body
                    featured
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