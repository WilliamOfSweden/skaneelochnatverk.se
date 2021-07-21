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
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
                once: true, // Defines if animation needs to be launched once
                disable: false, // Flag for disabling animations
                // Advanced Options
                selector: '[data-sal]', // Selector of the elements to be animated
                animateClassName: 'sal-animate', // Class name which triggers animation
                disabledClassName: 'sal-disabled', // Class name which defines the disabled state
                rootMargin: '0% 50%', // Corresponds to root's bounding box margin
                enterEventName: 'sal:in', // Enter event name
                exitEventName: 'sal:out', // Exit event name
            },
        },
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
  