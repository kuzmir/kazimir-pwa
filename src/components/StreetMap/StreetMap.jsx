// @flow

import * as React from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

type PropsType = {};

const StreetMap = (props: PropsType) => {

  console.log(props);
  const position = {
    lat: 51.505,
    lng: -0.09,
  };
  return (
    <div>
      We display map here hey.

      <Map
        center={position}
        zoom={13}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};



export default StreetMap;
