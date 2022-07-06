import Head from 'next/head'
import {useRouter} from 'next/router'

export default function SEO({ seo }){
  const router = useRouter()
  
  let fullURL = ""
  if (typeof window !== 'undefined') {
    let hostname = window.location.hostname;
    let routePath = router.pathname

    if(routePath == "/") {routePath = ""}
    
    fullURL = hostname + routePath
  }

  if(seo != null){

    return(
      <Head>
        
        {/* SEO Title */}
        { seo.title != "" ? <title>{seo.title}</title> : "" }

        {/* SEO Description */}
        { seo.description != "" ? <meta name="description" content={seo.description} /> : "" }

        {/* Twitter */}
        { seo.twitterCard != null ? <meta name="twitter:card" content={seo.twitterCard} /> : "" }
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image.url}></meta>

        {/* Open Graph / Facebook */}
        <meta property="og:url" content={fullURL} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image.url} />

      </Head>
    )

  }
  
}