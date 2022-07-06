import { StructuredText, Image } from 'react-datocms';
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function RemderStructuredText({data}) {
  return(
    <StructuredText
        data={data}
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
    />
  )
}