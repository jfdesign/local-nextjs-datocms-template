
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
        image {
          responsiveImage(imgixParams: {}) {
            srcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            bgColor
            base64
            webpSrcSet
          }
        }
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
      ... on ContentRecord {
        _modelApiKey
        structuredText {
          value
          links {
            slug
            modalName
            id
            modalVideo {
              url
              title
              thumbnailUrl
            }
            modalContent2
            modalImage {
              responsiveImage {
                width
                webpSrcSet
                title
                srcSet
                src
                sizes
                height
                aspectRatio
                alt
              }
            }
          }
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

      ... on MapRecord {
        _modelApiKey
        mapSettings {
          latitude
          longitude
        }
      }

      ... on AccordionRecord {
        _modelApiKey
        items {
          title
          details
        }
      }

    }
  }
}`;