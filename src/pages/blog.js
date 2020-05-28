import React from "react"
import Helmet from "react-helmet"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import Navigation from "../components/navigation"
import Header from "../components/header"
import HeaderTitle from "../components/headerTitle"
import PostLink from "../components/post-link";


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
            <Header>
                <Navigation/>
                <HeaderTitle>Thoughts about things</HeaderTitle>
            </Header>
            <div className="grids">
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