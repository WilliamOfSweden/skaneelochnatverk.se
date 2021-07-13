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
                name: 'Tjänster',
                link: 'services',
            },
            {
                name: 'Certifikat & Referenser',
                link: 'references',
            },
            {
                name: 'Om oss',
                link: 'about',
            },
            {
                name: 'Kontakt',
                link: 'contact',
            },
        ],
    },
    plugins: [
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
  