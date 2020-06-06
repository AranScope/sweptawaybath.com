import React from "react"
import Layout from "../components/layout"
import Navigation from "../components/navigation";
import Quote from "../components/quote";
import Header from "../components/header";
import Section from "../components/indexSection"
import {graphql, StaticQuery} from "gatsby";
import Container from "../components/container";
import SEO from "../components/seo"
import "../styles/global.css"

const pageQuery = graphql`
    query indexPageQuery {
        homePageJson {
            metadata {
                title
                description
            }
            header {
                alert {
                    badge
                    text
                }
                background_image
            }
            body {
                sections {
                    left {
                        include_coverage_map
                        text
                        title
                    }
                    right {
                        include_coverage_map
                        include_booking_button
                        text
                        title
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

            return (
                <Layout>
                    <SEO title={data.homePageJson.metadata.title} description={data.homePageJson.metadata.description} image={data.homePageJson.metadata.image}/>
                    <Header
                        className={"overflow-x-hidden"}
                        imageUrl={data.homePageJson.header.background_image}>
                        <Navigation/>
                        <Quote body={randomTestimonial.body} author={randomTestimonial.customer_name}/>
                    </Header>

                    <Container>
                        {
                            data.homePageJson.body.sections.map(s =>
                                <Section
                                    key={s.left.title}
                                    leftTitle={s.left.title}
                                    leftBody={s.left.text}
                                    leftIncludesMap={s.left.include_coverage_map}
                                    rightTitle={s.right.title}
                                    rightBody={s.right.text}
                                    rightIncludesBookButton={s.right.include_booking_button}
                                />)
                        }
                    </Container>
                </Layout>
            );
        }}/>
    )
}

export default IndexPage


