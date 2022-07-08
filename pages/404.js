import { request } from "../lib/datocms";
import RenderStructuredText from "../components/helpers/RenderStructuredText"
import { query_page } from "../lib/queries/query_page";


export default function NotFound(data) {
  const page = data.data.page

  return(
    <>
      <h1>{page.title}</h1>
      {page.slug}<br/>
      {page.id}<br/>
      <RenderStructuredText data={page.content[0].structuredText} /><br/>
      <br/>
    </>
  )
  
}

export async function getStaticProps(context) {

  const variables = {
    slug: '404-error'
  }

  const data = await request({
    query: query_page, variables,
    preview: context.preview
  });
  
  

  return {
    props: { data }
  }
  
}