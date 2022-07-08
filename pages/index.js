import { request } from "../lib/datocms";
import RenderStructuredText from "../components/helpers/RenderStructuredText"
import { query_page } from "../lib/queries/query_page";
import SEO from "../components/helpers/SEO";

export default function Home({data}) {
  const page = data.page

  return (
    <>
      <SEO seo={data.page.seo} />      
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
    slug: 'home'
  }

  const data = await request({
    query: query_page, variables,
    preview: context.preview
  });

  return {
    props: { data }
  }
  
}