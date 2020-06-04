import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import Navigation from "../components/navigation";
import Header from "../components/header";
import HeaderTitle from "../components/headerTitle"
import {graphql, StaticQuery} from "gatsby";
import Container from "../components/container"
import SideBySide from "../components/sideBySide"
import Section from "../components/section"
import Tick from "../components/tick"

const Prices = ({prices}) => (
    <SideBySide>
        <>
            <Section>
                <h1 className="text-gray-900 text-3xl md:text-5xl leading-tight font-extrabold"
                    style={{fontFamily: "Nunito Sans"}}>£{prices.regular_sweep.price} {prices.regular_sweep.title}</h1>
                <p className="text-gray-600 text-xl font-serif leading-loose">{prices.regular_sweep.description}</p>
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
                        <h2 className="text-gray-900 text-2xl md:text-2xl leading-tight font-extrabold"
                            style={{fontFamily: "Nunito Sans"}}>+ £{item.price} {item.title}</h2>
                        <p className="text-gray-600 text-xl font-serif leading-loose">{item.description}</p>
                    </Section>
                ))
            }
        </>
        <>
            <h2><a
                className="text-gray-900 md:text-gray-700 text-2xl leading-tight font-extrabold md:font-semibold  md:text-base md:uppercase"
                style={{fontFamily: "Nunito Sans"}}>Schedule Appointment</a></h2><br/>
            <p className="text-gray-600 text-xl font-serif leading-loose">All estimates are free and flexible. No hidden charges. No up selling.</p>
            <a
                href={"/book"}
                className="pointer inline-block border-solid border-2 border-orange-600 hover:bg-orange-600 hover:text-white text-orange-600 font-semibold py-4 my-8 px-8">BOOK
                NOW
            </a>
        </>
    </SideBySide>

)

export default () => (
    <StaticQuery query={pageQuery} render={data => {

        return (
            <Layout>
                <Helmet>
                    <title></title>
                </Helmet>
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
