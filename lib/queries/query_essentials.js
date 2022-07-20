export const query_essentials = 
`query($slug: String!) {
  _site {
    
    faviconMetaTags {
      tag
      attributes
    },

    globalSeo {
      titleSuffix
      twitterAccount
      facebookPageUrl
      siteName
      fallbackSeo {
        twitterCard
        description
        title
        image {
          url
        }
      }
    }

  },
  
  page(filter: {slug: {eq: $slug}}) {
    template
  },

  allUtilityMenus {
    id
    linkName
    links {
      linkType
      url
      page {
        slug
      }
      openInANewWindow
    }
  },

  allMainMenus(filter: {parent: {exists: "*"}}, orderBy: position_ASC) {
    id
    linkName
    links {
      linkType
      url
      page {
        slug
      }
      openInANewWindow
    }
    
    children {
      id
      linkName
      parent {
        id
        linkName
      }
      links {
        linkType
        url
        page {
          slug
        }
        openInANewWindow
      }

      children {
        id
        linkName
        parent {
          id
          linkName
        }
        links {
          linkType
          url
          page {
            slug
          }
          openInANewWindow
        }

        children {
          id
          linkName
          parent {
            id
            linkName
          }
          links {
            linkType
            url
            page {
              slug
            }
            openInANewWindow
          }

          children {
            id
            linkName
            parent {
              id
              linkName
            }
            links {
              linkType
              url
              page {
                id
                slug
              }
              openInANewWindow
            }
            
            children {
              id
              linkName
              parent {
                id
                linkName
              }
              links {
                linkType
                url
                page {
                  slug
                }
                openInANewWindow
              }              
            }
          }
        }
      }
    }
  }

}`;