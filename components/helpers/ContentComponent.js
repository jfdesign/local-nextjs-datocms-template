import RenderStructuredText from "./RenderStructuredText"
import Gallery from "../layouts/includes/Gallery";
import ContactForm from "../layouts/includes/ContactForm";
import Map from "../layouts/includes/Map";
import Accordion from "../layouts/includes/Accordion";
import { Image } from 'react-datocms';
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function ContentComponent({components, loadModal}) {
  
  let contentComponents = ""

  contentComponents = components.map((component, i) => {
    
    switch(component._modelApiKey) {
      case "gallery":
        return(<Gallery key={i} gallery={component} />)
        break;
      case "image":
        return(<Image key={i} data={component?.image?.responsiveImage} />)
        break;
      case "video":
        return(<ReactPlayer key={i} url={component?.videoLink?.url} />)
        break;
      case "map":
          return(<Map key={i} mapData={component} />)
          break;
      case "accordion":
        return(<Accordion key={i} data={component} />)
        break;
      case "content":
        return(<RenderStructuredText key={i} data={component?.structuredText} loadModal={loadModal} />)
        break;
        case "contact_form":
          return(<ContactForm key={i} />)
          break;
      default:
        return ""
    }

  });

  return (
    <>
      My component
      {contentComponents}
    </>
  )
}