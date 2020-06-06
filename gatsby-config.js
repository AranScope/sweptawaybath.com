/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: require("./site-meta-data.json"),
    plugins: [
        {
            resolve: 'gatsby-plugin-webpack-bundle-analyzer',
            options: {
                analyzerPort: 3000,
                production: true,
                disable: false,
            },
        },
        'gatsby-plugin-robots-txt',
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/_data/blog`,
            },
        },
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/_data/pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/static/assets`,
                name: `assets`
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `testimonials`,
                path: `${__dirname}/_data/testimonials`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog_categories`,
                path: `${__dirname}/_data/blog-categories`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `personal_details`,
                path: `${__dirname}/_data/personal`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {}
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 1920,
                        },
                    }],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it. replace with yours
                trackingId: "UA-164743872-1",
                head: true,
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Swept Away Chimney Sweep`,
                short_name: `Swept Away`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#381696`,
                display: `standalone`,
                icon: "favicon.svg",
            },
        },
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                // printRejected: true, // Print removed selectors and processed file names
                // develop: true, // Enable while using `gatsby develop`
                tailwind: true, // Enable tailwindcss support
                // whitelist: ['whitelist'], // Don't remove this selector
                // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
                // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
            }
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-netlify-cms`,
        // siteURL is a must for sitemap generation
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-preact`
        // `gatsby-plugin-offline`,
    ],
}
