import React from "react";
import Helmet from "react-helmet";
import {useStaticQuery} from "gatsby";
import {useLocation} from "@reach/router";

export default ({title, description, image, isArticle}) => {
    const {pathname} = useLocation()
    const {site} = useStaticQuery(query)

    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        defaultImage,
    } = site.siteMetadata

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
    }

    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description}/>
            <meta charSet="utf-8"/>

            <meta name="google-site-verification" content=""/>

            {seo.url && <meta property="og:url" content={seo.url}/>}

            {(isArticle ? true : null) && <meta property="og:type" content="article"/>}

            {seo.title && <meta property="og:title" content={seo.title}/>}

            {seo.description && (
                <meta property="og:description" content={seo.description}/>
            )}

            {seo.image && <meta property="og:image" content={seo.image}/>}

            {seo.title && <meta name="twitter:title" content={seo.title}/>}

            {seo.description && (
                <meta name="twitter:description" content={seo.description}/>
            )}

            {seo.image && <meta name="twitter:image" content={seo.image}/>}

            <link rel="icon" href="favicon.svg"/>

            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;900&display=swap"
                  as="style"
                  onLoad="this.onload=null;this.rel='stylesheet'"/>
            <link rel="preload"
                  href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap"
                  as="style"
                  onLoad="this.onload=null;this.rel='stylesheet'"/>
            <noscript>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;900&display=swap"/>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap"/>
            </noscript>
        </Helmet>
    )

}

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle
                titleTemplate
                defaultDescription
                siteUrl
                defaultImage
            }
        }
    }
`