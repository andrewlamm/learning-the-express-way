/** @jsx jsx */

import { useStaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'
import { Helmet } from 'react-helmet'

const Seo = ({ ...props }) => {
  const { site: { siteMetadata: data } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            description
            image
            origin
          }
        }
      }
    `
  )

  return (
    <Helmet { ...props } >
      <html lang='en' />

      <title>{data.title}</title>
      <meta name='title' content={data.title} />
      <meta name='description' content={data.description} />

      <meta property='og:type' content='website' />
      <meta property='og:url' content={data.origin} />
      <meta property='og:title' content={data.title} />
      <meta property='og:description' content={data.description} />
      <meta property='og:image' content={data.image} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={data.author} />
      <meta name='twitter:title' content={data.title} />
      <meta name='twitter:image' content={data.image} />
      <meta name='twitter:url' content={data.origin} />
      <meta name='twitter:description' content={data.description} />
    </Helmet>
  )
}

export default Seo
