import DefaultSEO from './DefaultSEO';
import HomeLayout from './HomeLayout'
import IntLayout1 from './IntLayout1'

export default function Layouts({ children, data }) {
  
  const template = data?.page?.template

  let tempComponent = ""
  
  switch(template) {
    case "home_template":
      tempComponent = <HomeLayout data={data}>{children}</HomeLayout>
      break;
    case "int_template1":
      tempComponent = <IntLayout1 data={data}>{children}</IntLayout1>
      break;
    default:
      tempComponent = <IntLayout1 data={data}>{children}</IntLayout1>
  }
  

  return(
    <>
      <DefaultSEO data={data} />
      {tempComponent}
    </>
  )

}