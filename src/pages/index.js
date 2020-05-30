import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import Navigation from "../components/navigation";
import Quote from "../components/quote";
import Header from "../components/header";
import Section from "../components/section"
import MapCoverage from "../components/mapCoverage"
import {graphql} from "gatsby";
import Container from "../components/container";


const IndexPage = ({
                       data: {
                           site,
                       },
                   }) => {

    return (
        <Layout>
            <Helmet>
                <title>{site.siteMetadata.title}</title>
                <meta name="description" content={site.siteMetadata.description}/>
            </Helmet>
            <Header
                imageUrl={"https://images.squarespace-cdn.com/content/56ec101db09f95da37e77918/1458317460088-Z27X14MAB5X7CAC0DBOG/SQS_DK_carlos_0226-e.jpg?format=2500w&content-type=image%2Fjpeg"}>
                <Navigation/>
                <Quote/>
            </Header>

            <Container>
                {/*<div className={"mx-5 pt-8 md:px-10 md:pt-16"}>*/}
                <Section/>
                <MapCoverage/>
                {/*</div>*/}
            </Container>
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query indexPageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
