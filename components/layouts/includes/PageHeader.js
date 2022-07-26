import { blockquoteNodeType } from "datocms-structured-text-utils"

export default function PageHeader({pgHeader}) {



  let bgColor = pgHeader?.bgcolor?.hex
  let bgImage = pgHeader?.bg?.responsiveImage?.src
  let getBtnColor = pgHeader?.btnColor?.hex
  let getBtnTextColor = pgHeader?.btnTextColor?.hex

  const getBGStyle = {
    backgroundColor: bgColor,
    backgroundImage: bgImage ? `url(${bgImage})` : 'url()'
  }

  return (
    <div style={getBGStyle}>
      <h1>{pgHeader.headline}</h1>
      <p>{pgHeader.subhead}</p>
      {        
        (() => {
          if(pgHeader.btnText != ""){
            return <button xstyle={{background: getBtnColor,  color: getBtnTextColor}}>{pgHeader.btnText}</button>
          }        
        })()
      }
    </div>
  )
}