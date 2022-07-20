import RenderStructuredText from "./RenderStructuredText"
import Gallery from "../layouts/includes/Gallery";
import ContactForm from "../layouts/includes/ContactForm";

export default function ContentComponent({components}) {
  
  let contentComponents = ""

  contentComponents = components.map((component, i) => {
    
    switch(component._modelApiKey) {
      case "gallery":
        return(<Gallery key={i} gallery={component} />)
        break;
      case "image":
        return(<div key={i}>image</div>)
        break;
      case "video":
        return(<div key={i}>video</div>)
        break;
      case "content":
        return(<RenderStructuredText key={i} data={component?.structuredText} />)
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