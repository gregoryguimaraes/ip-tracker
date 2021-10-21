import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react';
import '../styles/Map.css'
import { GlobalContext } from "../context/GlobalContext";

function Maps(){
    const global = React.useContext(GlobalContext);
    const {dados} = global
    const {lat, lng} = dados.location
    
    const position = [lat, lng]

    const [map, setMap] = React.useState(null);
    if (map) {
      map.flyTo(position, 17,{
        duration:3
      });
    }

    return (
<MapContainer center={position} zoom={13} scrollWheelZoom={false} whenCreated={setMap}>

    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    )
}

export default Maps;







