import React from "react"
import Layout from "../components/layout"
import Navigation from "../components/navigation";
import Header from "../components/header";
import HeaderTitle from "../components/headerTitle"
import {graphql, StaticQuery, Link} from "gatsby";
import Container from "../components/container"
import SideBySide from "../components/sideBySide"
import Section from "../components/section"
import Tick from "../components/tick"
import SEO from "../components/seo";

const Prices = ({prices}) => (
    <SideBySide>
        <>
            <Section>
                <h1 className="text-gray-900 text-3xl md:text-5xl leading-tight font-extrabold" >£{prices.regular_sweep.price} {prices.regular_sweep.title}</h1>
                <p className="text-gray-700 text-xl font-serif leading-loose">{prices.regular_sweep.description}</p>
                <ul className={"my-4 bg-gray-100 border-l-4 border-gray-500 p-4"}>
                    {
                        prices.everything_else_free.map(item => (
                            <>
                                <li className={"flex items-start my-3"}><Tick/> <p
                                    className={"ml-2 text-gray-800 text-xl"}><span
                                    className={"font-bold"}>{item.title}</span> - {item.description}</p> {item.new && (
                                    <span
                                        className="rounded-full bg-green-500 text-green-100 uppercase px-2 py-1 text-xs font-bold ml-2" style={{marginTop: "0.22rem"}}>New</span>
                                )
                                }</li>
                            </>
                        ))
                    }
                </ul>
            </Section>
            {
                prices.everything_else_paid.map(item => (
                    <Section>
                        <h2 className="text-gray-900 text-2xl md:text-2xl leading-tight font-extrabold">+ £{item.price} {item.title}</h2>
                        <p className="text-gray-700 text-xl font-serif leading-loose">{item.description}</p>
                    </Section>
                ))
            }
        </>
        <>
            <h2 className="text-gray-900 md:text-gray-700 text-2xl leading-tight font-extrabold md:font-semibold  md:text-base md:uppercase">Schedule Appointment</h2><br/>
            <p className="text-gray-700 text-xl font-serif leading-loose">All estimates are free and flexible. No hidden charges. No up selling.</p>
            <Link
                to={"/book"}
                className="pointer inline-block border-solid border-2 border-orange-700 hover:bg-orange-700 hover:text-white text-orange-700 font-semibold py-4 my-8 px-8">BOOK
                NOW
            </Link>
        </>
    </SideBySide>

)

export default () => (
    <StaticQuery query={pageQuery} render={data => {

        return (
            <Layout>
                <SEO title={data.pricesPageJson.metadata.title} description={data.pricesPageJson.metadata.description} image={data.pricesPageJson.metadata.image}/>
                <Header
                    imageUrl={"https://images.squarespace-cdn.com/content/56ec101db09f95da37e77918/1458317460088-Z27X14MAB5X7CAC0DBOG/SQS_DK_carlos_0226-e.jpg?format=2500w&content-type=image%2Fjpeg"}>
                    <Navigation/>
                    <HeaderTitle>Prices</HeaderTitle>
                </Header>
                <Container>
                    <Prices prices={data.pricesPageJson.prices}/>
                </Container>

            </Layout>
        )
    }}/>
)

export const pageQuery = graphql`
    query pricesPageQuery {
        site {
            siteMetadata {
                title
            }
        }
        
        pricesPageJson {
            metadata {
                title
                description
                image
            }
            prices {
                everything_else_free {
                    title
                    description
                    new
                }
                everything_else_paid {
                    title
                    price_type
                    price
                    description
                }
                regular_sweep {
                    title
                    price
                    description
                }
            }
        }
    }
`
