import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import Navigation from "../components/navigation";
import Quote from "../components/quote";
import Header from "../components/header";
import Section from "../components/description"
import MapCoverage from "../components/mapCoverage"
import {graphql, StaticQuery} from "gatsby";
import Container from "../components/container";

const pageQuery = graphql`
    query indexPageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
        allHomePageJson {
            edges {
                node {
                    header {
                        alert {
                            badge
                            text
                        }
                        title
                        background_image
                    }
                }
            }
        }

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
    }
`

const IndexPage = () => {
    return (
        <StaticQuery query={pageQuery} render={data => {
            let testimonials = data.allTestimonialsJson.edges.map(e => e.node).filter(t => t.featured)
            let i = Math.floor(Math.random() * testimonials.length)
            let randomTestimonial = testimonials[i]

            console.log(randomTestimonial)
            return (
                <Layout>
                    <Helmet>
                        <title>{data.site.siteMetadata.title}</title>
                        <meta name="description" content={data.site.siteMetadata.description}/>
                    </Helmet>
                    <Header
                        className={"overflow-x-hidden"}
                        imageUrl={data.allHomePageJson.edges[0].node.header.background_image}>
                        <Navigation title={data.allHomePageJson.edges[0].node.header.title}/>
                        <Quote body={randomTestimonial.body} author={randomTestimonial.customer_name}/>
                    </Header>

                    <Container>
                        <Section/>
                        <MapCoverage/>
                    </Container>
                </Layout>
            );
        }}/>
    )
}

export default IndexPage


