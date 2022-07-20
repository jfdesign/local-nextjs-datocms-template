
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

    pageHeaderImage {
      responsiveImage {
        alt
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    pageHeaderColor {
      hex
    }
    pageHeader
    pageSubHead
    pageHeaderButtonText
    pageHeaderButtonTextColor {
      hex
    }
    pageHeaderButtonColor {
      hex
    }

    content {
      ... on ImageRecord {
        _modelApiKey
      }
      ... on GalleryRecord {
        _modelApiKey
        gallerySlides {
          subHead
          headline
          link {
            linkType
            url
            page {
              slug
            }
            openInANewWindow
          }
          image {
            responsiveImage {
              alt
              title
              srcSet
              src
              sizes
              width
              webpSrcSet
              height
              aspectRatio
            }
          }
        }
      }
      ... on VideoRecord {
        _modelApiKey
      }
      ... on ContentRecord {
        _modelApiKey
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

      ... on ContactFormRecord {
        _modelApiKey
      }

    }
  }
}`;