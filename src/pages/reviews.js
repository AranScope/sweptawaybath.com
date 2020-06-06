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
                {/*<SEO title={data.pricesPageJson.metadata.title} description={data.pricesPageJson.metadata.description} image={data.pricesPageJson.metadata.image}/>*/}
                <Header
                    imageUrl={"https://images.squarespace-cdn.com/content/56ec101db09f95da37e77918/1458317460088-Z27X14MAB5X7CAC0DBOG/SQS_DK_carlos_0226-e.jpg?format=2500w&content-type=image%2Fjpeg"}>
                    <Navigation/>
                    <HeaderTitle>Reviews</HeaderTitle>
                </Header>
                <Container>
                    <div className="container mx-auto md:grid md:grid-cols-2 md:gap-6 my-6">

                        {
                            data.allTestimonialsJson.edges.map(e => e.node).map(review => (
                                <Review review={review}/>
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
        allTestimonialsJson {
            edges {
                node {
                    customer_name
                    date
                    link
                    body
                    featured
                }
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