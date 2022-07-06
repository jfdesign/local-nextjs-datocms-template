import Header from './includes/Header'
import Footer from './includes/Footer'

export default function HomeLayout({ children, data }) {


  return (
    <>
      
      <Header data={data}></Header>

      <div className="mainC">{children}</div>
      
      

    </>
  )
}
