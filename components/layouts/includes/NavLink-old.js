import Link from 'next/link'
import {useRouter} from 'next/router'

export default function NavLink({item, menu}) {
  
  const router = useRouter()

  let children = null;
  
  //if there are children values
  if(item.children && item.children.length) {  

    //store children found
    children = (
      <ul>
        {/* Loop throug again and check for more children */}  
        {item.children.map(i => {
          return (<NavLink item={i} key={i.id} menu={menu} />)
        })}
      </ul>
    );

  }

  //Get URLs and targets
  let url = ""
  let target = ""

  //if this a page
  if(item?.links[0]?.linkType == "page"){
  
    url = item.links[0].page.slug

    //if home fix url
    if(url == "home"){
      url = ""
    }

    //add slash in fron of page
    url = "/" + url
    
  
  } else if(item?.links[0]?.linkType == "url"){
  
    url = item.links[0].url
    target = item.links[0].target
  
  }




  //Display Lists 
  return(
    <li>
      
      <Link href={url}>
        <a className={router.pathname == url ? 'active': ''} target={target}>                  
            {item.linkName}        
        </a>
      </Link>

      {children}      
      
    </li>
  )

}