import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import Navigation from "../components/navigation";
import Quote from "../components/quote";
import Header from "../components/header";
import Section from "../components/indexSection"
import {graphql, StaticQuery} from "gatsby";
import Container from "../components/container";
import HeaderTitle from "../components/headerTitle";

const pageQuery = graphql`
    query bookPageQuery {
        site {
            siteMetadata {
                title
            }
        }
        homePageJson {
            metadata {
                description
            }
            header {
                alert {
                    badge
                    text
                }
                background_image
                title
            }
            body {
                sections {
                    left {
                        include_coverage_map
                        text
                        title
                    }
                    right {
                        include_booking_button
                        text
                        title
                    }
                }
            }
        }
    }
`

const IndexPage = () => {
    return (
        <StaticQuery query={pageQuery} render={data => (
            <Layout>
                <Helmet>
                    <title>{data.site.siteMetadata.title}</title>
                    <meta name="description" content={data.homePageJson.metadata.description}/>
                </Helmet>
                <Header
                    className={"overflow-x-hidden"}
                    imageUrl={data.homePageJson.header.background_image}>
                    <Navigation title={data.homePageJson.header.title}/>
                    <HeaderTitle>Book Now</HeaderTitle>
                </Header>

                <Container>
                    <Section
                        leftTitle={"Call Us On 01225 483690"}
                        leftBody={"The best way to book is over the phone. Chat to our friendly staff, who will find a time and date that best suits your schedule."}
                        rightTitle={"Book Now"}
                        rightBody={"Book Now"}
                    />
                    <div>
                        <form name="contact" netlify>
                            <p>
                                <label>Name <input type="text" name="name" /></label>
                            </p>
                            <p>
                                <label>Email <input type="email" name="email" /></label>
                            </p>
                            <p>
                                <button type="submit">Send</button>
                            </p>
                        </form>
                    </div>
                </Container>
            </Layout>
        )}/>
    )
}

export default IndexPage


