import { request } from "../lib/datocms";
import RenderStructuredText from "../components/helpers/RenderStructuredText"
import { query_page } from "../lib/queries/query_page";
import Search from "../components/search/search"

export default function SiteSearch(data) {
  const page = data.data.page

  return(
    <>
      <h1>{page.title}</h1>
      {page.slug}<br/>
      {page.id}<br/>
      <RenderStructuredText data={page.content[0].structuredText} />
      <Search/>
    </>
  )
  
}

export async function getStaticProps(context) {

  const variables = {
    slug: 'site-search'
  }

  const data = await request({
    query: query_page, variables,
    preview: context.preview
  });
  
  

  return {
    props: { data }
  }
  
}