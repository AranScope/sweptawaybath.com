import React from "react"
import Helmet from "react-helmet"
import {graphql, StaticQuery} from 'gatsby'
import Layout from "../components/layout"
import Navigation from "../components/navigation"
import Header from "../components/header"
import HeaderTitle from "../components/headerTitle"
import Container from "../components/container"
import PostLink from "../components/post-link";
import SEO from "../components/seo";

const uncategorisedTitle = "Uncategorised"

function groupByCategory(posts) {
    let postsByCategory = {}
    for (let post of posts) {

        post.frontmatter.category = post.frontmatter.category || uncategorisedTitle

        if (!(post.frontmatter.category in postsByCategory)) {
            postsByCategory[post.frontmatter.category] = []
        }

        postsByCategory[post.frontmatter.category].push(post)
    }

    return Object.entries(postsByCategory).map(([category, posts]) => ({
        category: category,
        posts: posts
    })).sort((a, b) => a.category.localeCompare(b.category))
}

export default () => (
    <StaticQuery query={pageQuery} render={data => {
        const posts = data.allMarkdownRemark.edges
            .map(edge => edge.node)
            .filter(node => !!node.frontmatter.date) // You can filter your posts based on some criteria

        const groupedByCategory = groupByCategory(posts)

        return (
            <Layout>
                <SEO title={data.blogPageJson.metadata.title} description={data.blogPageJson.metadata.description} image={data.blogPageJson.metadata.image}/>
                <Header
                    imageUrl={data.blogPageJson.header.background_image}>
                    <Navigation/>
                    <HeaderTitle>{data.blogPageJson.header.title}</HeaderTitle>
                </Header>
                <Container>
                    {
                        groupedByCategory.map(group => (
                            <section key={group.category}>
                                <h1 className="text-gray-900 text-3xl md:text-5xl leading-tight font-extrabold">{group.category}</h1>
                                <div className="container mx-auto md:grid md:grid-cols-2 md:gap-6 my-6">
                                    {group.posts.map(post => <PostLink key={post.id} post={post} authorName={data.personalJson.first_name} authorImage={data.personalJson.profile_image}/>)}
                                </div>
                            </section>
                        ))
                    }
                </Container>

            </Layout>
        )
    }}/>
)


const pageQuery = graphql`
    query blogPageQuery {
        blogPageJson {
            metadata {
                description
            }
            header {
                title
                background_image
            }
        }
            
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMM, YYYY")
                        path
                        title
                        thumbnail
                        category
                    }
                }
            }
        }

        personalJson {
            profile_image {
                image
                alt
            }
            first_name
        }
    }
`