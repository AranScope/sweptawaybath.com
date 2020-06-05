import React from "react";
import Helmet from "react-helmet";

export default ({title, description, image}) => {

    return (
        <Helmet title={title} titleTemplate={"titleTemplate"}>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta charSet="utf-8"/>
            <meta name="google-site-verification" content=""/>

            <meta property="og:image" content={image}/>
            <meta property="og:description" content={description}/>
            <meta property="og:title" content={title}/>

            <link rel="icon" href="favicon.svg"/>
        </Helmet>
    )

}