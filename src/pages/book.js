import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import Navigation from "../components/navigation";
import Header from "../components/header";
import Section from "../components/indexSection"
import {graphql, StaticQuery} from "gatsby";
import Container from "../components/container";
import HeaderTitle from "../components/headerTitle";
import SEO from "../components/seo";

const pageQuery = graphql`
    query bookPageQuery {
        site {
            siteMetadata {
                title
            }
        }
        bookPageJson {
            metadata {
                description
                title
                image
            }
            header {
                title
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
                <SEO title={data.bookPageJson.metadata.title} description={data.bookPageJson.metadata.description} image={data.bookPageJson.metadata.image}/>
                <Header
                    className={"overflow-x-hidden"}
                    imageUrl={data.bookPageJson.header.background_image}>
                    <Navigation/>
                    <HeaderTitle>{data.bookPageJson.header.title}</HeaderTitle>
                    <div className={"block md:hidden relative"} style={{top: "1.6rem"}}>
                        <div className={"flex justify-center md:justify-start -my-6"}>
                            <a
                                href={"tel:01225483690"}
                                className="flex items-center shadow-md bg-green-600 hover:bg-green-400 text-white py-2 px-6 mx-2">
                                <span className={"font-bold"}><Phone/></span> <span className={"ml-4 text-2xl"}>TAP TO CALL</span>
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


