// @flow

import * as React from 'react';

import {withRouter} from 'react-router-dom';
import withProps from '../../utils/withProps';
import {withLocale} from '../../utils/locale/withLocale';
import MapStreetLines from './MapStreetLines';
import {Map, TileLayer} from 'react-leaflet';

import type {StreetType} from '../../AppContainer';

import 'leaflet/dist/leaflet.css';
import style from './map.css';

export type MapContainerReceivedPropsType = {
  data: Array<StreetType>,
};

type MapContainerPropsType = {
  street: ?StreetType,
  streets: Array<StreetType>,
};

const KAZIMIERZ_CENTER_POSITION = [50.053632572808255, 19.948285818099976];

const MapContainer = ({street, streets}: MapContainerPropsType) => {
  const position = street
    ? street.path.coordinates[1]
    : KAZIMIERZ_CENTER_POSITION;

  return (
    <div className={style.mapContainer}>
      <Map
        viewport={{
          center: position,
          zoom: 16,
        }}
        className={style.mapWrapper}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {street && <MapStreetLines streets={streets} activeId={street.id} />}
      </Map>
    </div>
  );
};

const mapPropsToNewProps = ({match, data, locale}) => ({
  street: data.find(item => item.id === ~~match.params.id),
  streets: data,
  locale,
});

export default withLocale()<MapContainerReceivedPropsType>(
  withRouter(withProps(mapPropsToNewProps, MapContainer))
);
