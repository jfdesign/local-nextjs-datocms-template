import Link from 'next/link'
import {useRouter} from 'next/router'

export default function NavLink({item}) {
  
  const router = useRouter()

  let link = getLink(item, "")

  let target = getTarget(item.links[0].openInANewWindow)


  //Display Lists 
  return(
    <li>
        <Link href={link} >
          <a className={router.pathname == link ? 'active': ''} target={target}>
            {item.linkName}
          </a>
        </Link>
       {nextLevel(item, link)}   
    </li>
  )

  //Target
  function getTarget(newWindow){

    let setTarget = ""
    
    if(newWindow){
      setTarget = "_blank"
    }

    return setTarget
  }

  //Link
  function getLink(item, rootPath){

    let url = ""

    //if this a page
    if(item?.links[0]?.linkType == "page"){
    
      url = item.links[0].page.slug

      //if home fix url
      if(url == "home"){
        url = ""
      }

      //add root Path
      url = rootPath + "/" + url
      
    
    } else if(item?.links[0]?.linkType == "url"){
    
      url = item.links[0].url
    
    }

    return url

  }

 
  //Next Level
  function nextLevel(lv_Item, rootPath) {
    
    //has children
    if(lv_Item?.children?.length > 0 ){
      
      return(
        <ul>
          { lv_Item.children.map((nav) => {
              
              let link = getLink(nav, rootPath)

              let target = getTarget(nav.links[0].openInANewWindow)
              
              
              return (
                <li key={nav.id}>
                  <Link href={link}>
                    <a className={router.pathname == link ? 'active': ''} target={target}>
                      {nav.linkName}
                    </a>
                  </Link>
                  {nextLevel(nav, link)}
                </li>
              )
            })
          }
        </ul>
      )
    }
  }


}










