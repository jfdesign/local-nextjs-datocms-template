
export const query_page = 
`query($slug: String) {
  
  _site {
    globalSeo {
      titleSuffix
    }
  },

  page(filter: {slug: {eq: $slug}}) {
    id
    slug
    title
    seo {
      title
      description
      twitterCard
      image {
        url
      }
    }
    content {
      ... on ContentRecord {
        id
        structuredText {
          value
          blocks {
            ... on ImageRecord {
              id
              __typename
              image {
                responsiveImage(imgixParams: {}) {
                  srcSet
                  webpSrcSet
                  sizes
                  src
                  width
                  height
                  aspectRatio
                  alt
                  title
                  bgColor
                  base64
                }
              }
            }
            ... on VideoRecord {
              id
              __typename
              videoLink {
                provider
                providerUid
                thumbnailUrl
                title
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
}`;