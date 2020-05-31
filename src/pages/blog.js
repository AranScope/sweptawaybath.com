import React from "react"
import Helmet from "react-helmet"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import Navigation from "../components/navigation"
import Header from "../components/header"
import HeaderTitle from "../components/headerTitle"
import PostLink from "../components/post-link";

function groupByCategory(posts) {
    // get the categ
    const map = new Map();

    for(let post of posts) {

    }
}

export default ({
                    data: {
                        allMarkdownRemark: {edges},
                    },
                }) => {

    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => <PostLink key={edge.node.id} post={edge.node}/>)


    return (
        <Layout>
            <Helmet>
                <title></title>
                <meta name="description" content={"Contact page of "}/>
            </Helmet>
            <Header imageUrl={"https://images.squarespace-cdn.com/content/56ec101db09f95da37e77918/1458317460088-Z27X14MAB5X7CAC0DBOG/SQS_DK_carlos_0226-e.jpg?format=2500w&content-type=image%2Fjpeg"}>
                <Navigation/>
                <HeaderTitle>Thoughts about things</HeaderTitle>
            </Header>
            <div className="grids container mx-auto grid grid-cols-2 gap-6 my-6">
                {Posts}
            </div>
        </Layout>
    )
}


export const pageQuery = graphql`
    query blogPageQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                        thumbnail
                    }
                }
            }
        }

    }
`