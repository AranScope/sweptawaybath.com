import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import PricingCard from "../components/PricingCard";
import Navigation from "../components/navigation";
import Header from "../components/header";
import HeaderTitle from "../components/headerTitle"
import {graphql} from "gatsby";


const PricesPage = ({
                       data: {
                           site,
                       },
                   }) => {

    return (
        <Layout>
            <Helmet>
                <title>{site.siteMetadata.title}</title>
                <meta name="description" content={site.siteMetadata.description} />
            </Helmet>
            <Header imageUrl={"https://images.squarespace-cdn.com/content/56ec101db09f95da37e77918/1458317460088-Z27X14MAB5X7CAC0DBOG/SQS_DK_carlos_0226-e.jpg?format=2500w&content-type=image%2Fjpeg"}>
                <Navigation />
                <HeaderTitle>Prices</HeaderTitle>
            </Header>
            <div className="container mx-auto p-10">
                <div className="mx-auto">
                    <PricingCard/>
                </div>
            </div>
        </Layout>
    //    How many chimneys need to be swept?
        // Do you need any camera inspections?
        // How many?
        // Do you need a separate written report?
    )
}

export default PricesPage

export const pageQuery = graphql`
    query pricesPageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
