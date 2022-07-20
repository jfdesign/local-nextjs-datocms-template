import Head from 'next/head'
import {useRouter} from 'next/router'

export default function SEO({ seo, defSEO, defPageTitle }){
  const router = useRouter()
  
  let fullURL = ""
  if (typeof window !== 'undefined') {
    let hostname = window.location.hostname;
    let routePath = router.asPath

    if(routePath == "/") {routePath = ""}
    
    fullURL = hostname + routePath
  }

  let seoPageTitle = defPageTitle
  if(seo?.title != "" && seo?.title != undefined){
    seoPageTitle = seo?.title
  }
  
  const seoTitle = `${seoPageTitle}${defSEO?.titleSuffix}`

  return(
    <Head>
      
      {/* SEO Title */}
      <title>{seoTitle}</title>

      {/* SEO Description */}
      { seo?.description != "" && seo?.description != undefined ? <meta name="description" content={seo?.description} /> : "" }

      {/* Twitter */}
      { seo?.twitterCard != "" && seo?.twitterCard != undefined ? <meta name="twitter:card" content={seo?.twitterCard} /> : "" }
      <meta name="twitter:title" content={seo?.title} />
      { seo?.description != "" && seo?.description != undefined ? <meta name="twitter:description" content={seo?.description} /> : "" }
      { seo?.image?.url != "" && seo?.image?.url != undefined ? <meta name="twitter:image" content={seo?.image?.url}></meta> : "" }
      

      {/* Open Graph / Facebook */}
      <meta property="og:url" content={fullURL} />
      <meta property="og:title" content={seoTitle} />
      { seo?.description != "" && seo?.description != undefined ? <meta property="og:description" content={seo?.description} /> : "" }
      { seo?.image?.url != "" && seo?.image?.url != undefined ? <meta property="og:image" content={seo?.image?.url} /> : "" }

    </Head>
  )

  
  
}