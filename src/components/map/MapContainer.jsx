// @flow strict

import React from 'react';
// $FlowFixMe https://github.com/ReactTraining/react-router/issues/6944
import {useParams} from 'react-router-dom';
import MapStreetLines from './MapStreetLines';
import {Map, TileLayer} from 'react-leaflet';
import {slugifyStreetName} from '../../utils/url';

import type {StreetType} from '../../AppContainer';

import 'leaflet/dist/leaflet.css';
import style from './map.css';
import useI18n from '../../utils/locale/i18n';

export type MapContainerPropsType = {
  data: Array<StreetType>,
};

const KAZIMIERZ_CENTER_POSITION = [50.053632572808255, 19.948285818099976];

const MapContainer = ({data}: MapContainerPropsType) => {
  const {locale} = useI18n();
  const {name} = useParams();
  const street = data.find(item => slugifyStreetName(item.name) === name);
  const position = street ? street.coordinates[1] : KAZIMIERZ_CENTER_POSITION;

  return (
    <div className={style.mapContainer}>
      <Map
        viewport={{
          center: position,
          zoom: 16,
          maxZoom: 20,
        }}
        className={style.mapWrapper}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png"
          attribution='Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {street && <MapStreetLines streets={data} activeId={street.id} />}
      </Map>
    </div>
  );
};

export default MapContainer;
