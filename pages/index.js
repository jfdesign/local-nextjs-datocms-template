import { request } from "../lib/datocms";
import { query_page } from "../lib/queries/query_page";
import SEO from "../components/helpers/SEO";
import ContentComponent from "../components/helpers/ContentComponent";
import PageHeader from "../components/layouts/includes/PageHeader";

export default function Home({data, loadModal}) {
  const page = data.page
  
  let pgHeader = {
    "bg": page.pageHeaderImage,
    "bgcolor": page.pageHeaderColor,
    "headline": page.pageHeader,
    "subhead": page.pageSubHead,
    "btnText": page.pageHeaderButtonText,
    "btnTextColor": page.pageHeaderButtonTextColor,
    "btnColor": page.pageHeaderButtonColor,
  }


  return (
    <>
      <SEO seo={data.page.seo} defSEO={data._site.globalSeo} defPageTitle={page.title} />      
      
      <PageHeader pgHeader={pgHeader} />
      
      {page.slug}<br/>
      {page.id}<br/>

      <button onClick={() => loadModal({show:true, data: "Modal1"})}>Open Modal 1</button>
      <br/><br/>
   
      
      
      
      <br />
      <ContentComponent components={data.page.content} />
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