import Head from 'next/head'
import {renderMetaTagsToString } from "react-datocms";

export default function DefaultSEO({ data }){

  const seo = data._site.globalSeo
  const favicons = data._site.faviconMetaTags
  const seoTitle = `${seo.fallbackSeo.title}${seo.titleSuffix}`

  return(
    <Head>
      
      <title>{seoTitle}</title>
      <meta name="description" content={seo.fallbackSeo.description} />

      {/* Favicons */}
      {
        Object.entries(favicons).map(([key, value]) => {
            return <link key={key} rel="icon" href={value.attributes.href} sizes={value.attributes.sizes} />
          }
        )
      }

      {/* Twitter Minimal Defaults */}
      <meta name="twitter:site" content={seo.twitterAccount} />

    </Head>
  )
}