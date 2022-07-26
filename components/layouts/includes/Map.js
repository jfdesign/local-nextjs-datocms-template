import GoogleMapReact from 'google-map-react';

export default function Map({mapData}) {
  
  //console.log(mapData.mapSettings)
  
  //*  To add map markers you'd have add manual input fields for lat and longitude fields.
  //Not a great experience from an editor standpoint

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: mapData.mapSettings.latitude,
      lng: mapData.mapSettings.longitude
    },
    zoom: 16
  };

  return (
    <div style={{width: "100%", height: "500px"}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter= {defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        
      </GoogleMapReact>
    </div>
  )
}