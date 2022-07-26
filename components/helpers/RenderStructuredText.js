import { StructuredText, renderNodeRule , Image } from 'react-datocms';
import { isLink, isHeading, isEmptyDocument } from 'datocms-structured-text-utils';
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function RemderStructuredText({data, loadModal}) {
  
  function handleClick(e, record){
    e.preventDefault()

    let img = ""
    if(record?.modalImage?.responsiveImage != undefined){
      img = <Image data={record?.modalImage?.responsiveImage} />
    }

    let vid = ""
    if(record?.modalVideo?.url != undefined){
      vid = <ReactPlayer url={record?.modalVideo?.url} />
    }

    let copy = record?.modalContent2
    if(copy == ""){
      copy = ""
    }
    

    let modalContent = (
      <>
        {img}
        {vid}
        <div dangerouslySetInnerHTML={{__html: copy}}></div>
      </>
      
    )

    loadModal({show:true, data: modalContent})
  }
  

  return(
    <StructuredText
        data={data}

        renderLinkToRecord={({ record, children }) => {
          
          return (
            <a onClick={(e) => handleClick(e, record)} href="">
              {children}
            </a>
          );
        }}
        renderBlock={({ record }) => {
          switch (record.__typename) {
            case 'ImageRecord':
              return <Image data={record.image.responsiveImage} />;
            case 'VideoRecord':
              return <ReactPlayer url={record.videoLink.url} />;
            default:
              return null;
          }
        }}
        /*
        customNodeRules={[
          renderNodeRule(isLink, ({ node, children, key }) => {
            
            let classNameVar = `${node.meta[0].id}='${node.meta[0].value}'`

            
            return (
              <a classNaame={node.meta[0].value} href={node.url}>{node.children[0].value}</a>
            );
          })
        ]}
        */
    />
  )
}