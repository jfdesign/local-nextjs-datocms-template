
import '../styles/globals.css'
import Layouts from '../components/layouts/Layouts'
import { request } from "../lib/datocms";
import { query_essentials } from '../lib/queries/query_essentials';


function MyApp({ Component, pageProps, data }) {
  return (
    <>
      <Layouts data={data} >
        <Component {...pageProps} />
      </Layouts>
    </>
  )
}
export default MyApp



MyApp.getInitialProps = async ({ ctx }) => {
  
  let getSlug = ctx.asPath
  if(getSlug == "/"){
    getSlug = "home"
  }
  getSlug = getSlug.split("/")
  getSlug = getSlug[getSlug.length - 1]

  //console.log(ctx.preview)

  const variables = {
    slug: getSlug,
  }

  const data = await request({
    query: query_essentials, variables,
    preview: true
  });

  //console.log(data)

  return { data }

}
