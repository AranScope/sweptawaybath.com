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
            }
        }
    }
`

const Phone = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path className="fill-current"
              d="M13.04 14.69l1.07-2.14a1 1 0 0 1 1.2-.5l6 2A1 1 0 0 1 22 15v5a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2h5a1 1 0 0 1 .95.68l2 6a1 1 0 0 1-.5 1.21L9.3 10.96a10.05 10.05 0 0 0 3.73 3.73zM8.28 4H4v2a14 14 0 0 0 14 14h2v-4.28l-4.5-1.5-1.12 2.26a1 1 0 0 1-1.3.46 12.04 12.04 0 0 1-6.02-6.01 1 1 0 0 1 .46-1.3l2.26-1.14L8.28 4z"/>
    </svg>
)

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
                    <Navigation/>
                    <HeaderTitle>Book Now</HeaderTitle>
                    <div className={"block md:hidden relative"} style={{top: "1.6rem"}}>
                        <div className={"flex justify-center md:justify-start -my-6"}>
                            <a
                                target={"_blank"}
                                rel={"noreferrer"}
                                href={"https://www.facebook.com/sharer/sharer.php?u=http://sweptawaybath.com"}
                                className="flex items-center shadow-md bg-green-600 hover:bg-green-400 text-white py-2 px-6 mx-2">
                                <span className={"font-bold text-2xl"}><Phone/></span> <span className={"ml-4"}>TAP TO CALL</span>
                            </a>
                        </div>
                    </div>
                </Header>

                <Container>
                    <Section
                        leftTitle={"Call Us On 01225 483690"}
                        leftBody={"The best way to book is over the phone. Chat to our friendly staff, who will find a time and date that best suits your schedule."}
                    />
                    <Section
                        leftTitle={"What to expect on the day"}
                        leftBody={"The best way to book is over the phone. Chat to our friendly staff, who will find a time and date that best suits your schedule."}
                    />
                </Container>
            </Layout>
        )}/>
    )
}

export default IndexPage


