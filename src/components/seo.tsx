import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

interface Props {
  description?: string
  title?: string
}

const SEO = ({ description, title }: Props) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          ogDescription
          ogImageUrl
          ogType
          siteDescription
          siteTitle
          siteUrl
        }
      }
    }
  `)

  const {
    ogDescription,
    ogImageUrl,
    ogType,
    siteDescription,
    siteTitle,
    siteUrl,
  } = data.site.siteMetadata

  return (
    <Helmet>
      <html lang='sv-SE' />
      <meta charSet='UTF-8' />
      <meta
        name='description'
        content={description ? description : siteDescription}
      />
      <title>{title ? title : siteTitle}</title>
      <meta property='og:url' content={siteUrl} />
      <meta property='og:type' content={ogType} />
      <meta property='og:title' content={siteTitle} />
      <meta property='og:description' content={ogDescription} />
      <meta property='og:image' content={ogImageUrl} />
    </Helmet>
  )
}

export default SEO
