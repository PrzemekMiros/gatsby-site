import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ( { title, description, image } ) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            image
          }
        }
      }
    `
  );

  const SeoTags = [
    {
      name: 'description',
      content: description ? description : site.siteMetadata.description
    },
    {
      name: 'keywords',
      content: site.siteMetadata.keywords.join( ',' )
    },
    {
      property: 'og:title',
      content: title ? title : site.siteMetadata.title
    },
    {
      property: 'og:description',
      content: description ? description : site.siteMetadata.description
    },
    {
      property: 'og:image',
      content: image ? image : site.siteMetadata.image
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:creator',
      content: site.siteMetadata.author
    },
    {
      name: 'twitter:title',
      content: title ? title : site.siteMetadata.title
    },
    {
      name: 'twitter:description',
      content: description ? description : site.siteMetadata.description
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    }
  ];

  return (
    <Helmet
      title={title ? title : site.siteMetadata.title}
      meta={SeoTags}
      htmlAttributes={{ lang: 'pl' }}
    />
  );
};

export default Seo;