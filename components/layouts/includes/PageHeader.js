import { blockquoteNodeType } from "datocms-structured-text-utils"

export default function PageHeader({pgHeader}) {



  let bgColor = pgHeader?.bgcolor?.hex
  let bgImage = pgHeader?.bg?.responsiveImage?.src
  let getBgStyle = `${bgColor} url(${bgImage})`
  let getBtnColor = pgHeader?.btnColor?.hex
  let getBtnTextColor = pgHeader?.btnTextColor?.hex

  return (
    <div style={{ background: getBgStyle }}>
      <h1>{pgHeader.headline}</h1>
      <p>{pgHeader.subhead}</p>
      {        
        (() => {
          if(pgHeader.btnText != ""){
            return <button style={{background: getBtnColor,  color: getBtnTextColor}}>{pgHeader.btnText}</button>
          }        
        })()
      }
    </div>
  )
}