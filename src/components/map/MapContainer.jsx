// @flow

import * as React from 'react';

import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import withProps from '../../utils/withProps';
import {withLocale} from '../../utils/locale/withLocale';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import style from './map.css';

const MapContainer = ({street}) => {
  const position = {
    lat: street.path.coordinates[0][0],
    lng: street.path.coordinates[0][1],
  };
  return (
    <div className={style.mapContainer}>
      <Map
        viewport={{
          center: position,
          zoom: 5
        }}
        className={style.mapWrapper}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    </div>
  );
};

const mapPropsToNewProps = ({match, data, locale}) => ({
  street: data.find(item => item.id === ~~match.params.id),
  locale
});

export default withLocale()(
  withRouter(withProps(mapPropsToNewProps, MapContainer))
);
