require('dotenv').config({

    path: `.env.${process.env.NODE_ENV}`,

})


module.exports = {
    siteMetadata: {
        ogDescription: `Vi utför el- och nätverksarbete i södra Skåne.`,
        ogImageUrl: `https://skaneelochnatverk.se/banner.png`,
        ogType: 'website',
        siteDescription: `Company Websites | Skåne El & Nätverk`,
        siteTitle: `Skåne El & Nätverk`,
        siteUrl: `https://skaneelochnatverk.se`,
        navLinks:[
            {
                name: 'Eljour',
                link: 'cta',
            },
            {
                name: 'Tjänster',
                link: 'services',
            },
            {
                name: 'Referenser',
                link: 'references',
            },
            {
                name: 'Kontakt',
                link: 'contact',
            },
            {
                name: `Ring oss`,
                link: '+460701488148',
                teleLink: true,
            }
        ],
    },
    plugins: [
        `gatsby-plugin-smoothscroll`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                stylesProvider: {
                    injectFirst: true,
                },
            },
        },
        {
            resolve: 'gatsby-source-graphcms',
            options: {
                endpoint: process.env.GCMS_ENDPOINT,
                buildMarkdownNodes: true,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `content`,
              path: `${__dirname}/content/`,
            },
        },
        `gatsby-plugin-mdx`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
    ],
}
  