// @flow

import * as React from 'react';

import {Link, withRouter} from 'react-router-dom';
import withProps from '../../utils/withProps';
import {withLocale} from '../../utils/locale/withLocale';
import MapStreetLines from './MapStreetLines';
import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import style from './map.css';

type MapContainerPropType = {
  street: Object,
  streets: Array<Object>
};

const MapContainer = ({street, streets}: MapContainerPropType) => {
  const position = {
    lat: street.path.coordinates[1][0],
    lng: street.path.coordinates[1][1]
  };

  return (
    <div className={style.mapContainer}>
      <Map
        viewport={{
          center: position,
          zoom: 16
        }}
        className={style.mapWrapper}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapStreetLines streets={streets} activeId={street.id} />
      </Map>
    </div>
  );
};

const mapPropsToNewProps = ({match, data, locale}) => ({
  street: data.find(item => item.id === ~~match.params.id),
  streets: data,
  locale
});

export default withLocale()(
  withRouter(withProps(mapPropsToNewProps, MapContainer))
);
