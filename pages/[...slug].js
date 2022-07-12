import { request } from "../lib/datocms";
import RenderStructuredText from "../components/helpers/RenderStructuredText"
import { query_allPages } from "../lib/queries/query_allPages";
import { query_page } from "../lib/queries/query_page";
import SEO from "../components/helpers/SEO";

export default function Pages({data}) {
  const page = data.page

  return(
    <>
      Internal Page<br />
      <SEO seo={data.page.seo} defSEO={data._site.globalSeo} defPageTitle={page.title} />      
      <h1>{page.title}</h1>
      {page.slug}<br/>
      {page.id}<br/>
      <RenderStructuredText data={page?.content[0]?.structuredText} /><br/>
      <br/>
    </>
  )
}


//Get Current Page
export async function getStaticProps({ params, preview=false}) {

  const variables = {
    slug: params.slug[params.slug.length - 1],
  }

  const data = await request({
    query: query_page, variables,
    preview: preview
  });

  return {
    props: { data }
  }

}


//Build Pages
export async function getStaticPaths(context) {

  //Query all the pages
  const data = await request({
    query: query_allPages
  })

  //Build create pages from slugs
  let getPages = data.allPages.map((page) => {

    //holds multiple params for multiple pages
    let setParams = [{ params: { slug: [page.slug]} }]

    
    if(page.children.length > 0) {
      
      //level2
      page.children.forEach((lvl2) =>{

        setParams.push({ params: { slug: [page.slug, lvl2.slug]} })

        
        if(lvl2.children.length > 0) {
          
          //level3
          lvl2.children.forEach((lvl3) =>{
            
            setParams.push({ params: { slug: [page.slug, lvl2.slug, lvl3.slug]} })

            if(lvl3.children.length > 0) {
              
              //level4
              lvl3.children.forEach((lvl4) =>{
                
                setParams.push({ params: { slug: [page.slug, lvl2.slug, lvl3.slug, lvl4.slug]} })

                if(lvl4.children.length > 0) {
                  
                  //level5
                  lvl4.children.forEach((lvl5) =>{
                    
                    setParams.push({ params: { slug: [page.slug, lvl2.slug, lvl3.slug, lvl4.slug, lvl5.slug]} })

                  })
                
                }

              })

            }

          })

        }
        

      });


    }
    
    return setParams

  })
  

  //merge arrays into one
  getPages = [].concat.apply([], getPages)
  
  /*
  getPages = [
    { params: { slug: ['level1']} },
    { params: { slug: ['level1', 'level2']} },
    { params: { slug: ['about']} }
  ]
  */ 

  return {
    paths:  getPages,
    fallback: false
  }
  
  
}
