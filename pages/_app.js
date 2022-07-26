
import { useState } from 'react'
import '../styles/globals.css'
import Layouts from '../components/layouts/Layouts'
import { request } from "../lib/datocms";
import { query_essentials } from '../lib/queries/query_essentials';
import Modal from '../components/helpers/Modal';

function MyApp({ Component, pageProps, data }) {

  const [modal, setModal] = useState({
    show: false,
    data: null
  })
  
  return (
    <>
      <Layouts data={data} >
        <Modal props={modal} onClose={() => setModal({show:false})} />
        <Component {...pageProps} loadModal={(props) => setModal({show:props.show, data:props.data})} />
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

  const variables = {
    slug: getSlug,
  }

  const data = await request({
    query: query_essentials, variables,
    preview: true
  });

  return { data }

}
