import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import Navigation from "../components/navigation";
import Header from "../components/header";
import HeaderTitle from "../components/headerTitle"
import {graphql, StaticQuery} from "gatsby";
import Container from "../components/container"
import SideBySide from "../components/sideBySide"
import Tick from "../components/tick"

const Prices = ({prices}) => (
    <>
        <h1 className="text-gray-900 text-3xl md:text-5xl leading-tight font-extrabold"
            style={{fontFamily: "Nunito Sans"}}>£{prices.regular_sweep.price} {prices.regular_sweep.title}</h1>
        <p className="text-gray-600 text-xl font-serif leading-loose">{prices.regular_sweep.description}</p>
        <ul>
            {
                prices.everything_else_free.map(item => (
                    <>
                        <li className={"flex items-center"}><Tick/> <p
                            className={"ml-2 text-gray-800"}>{item.title} - {item.description}</p> {item.new && (
                            <span
                                className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
                        )
                        }</li>
                    </>
                ))
            }
        </ul>
        {
            prices.everything_else_paid.map(item => (
                <>
                    <h2 className="text-gray-900 text-3xl md:text-5xl leading-tight font-extrabold"
                        style={{fontFamily: "Nunito Sans"}}>£{item.price} {item.title}</h2>
                    <p className="text-gray-600 text-xl font-serif leading-loose">{item.description}</p>
                </>
            ))
        }
    </>

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
                    <SideBySide>
                        <>
                            <Prices prices={data.pricesPageJson.prices}/>
                        </>
                    </SideBySide>
                </Container>

            </Layout>
        )
    }}/>
)

export const pageQuery = graphql`
    query pricesPageQuery {
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
