// @flow

import * as React from 'react';

import Street from './Street';
import type {StreetType} from '../../AppContainer';
import style from './list.css';

type StreetListPropsType = {
  data: Array<StreetType>,
  desktopView?: boolean,
  mapView?: boolean,
};

const StreetList = ({mapView = false, desktopView, data}: StreetListPropsType) => {
  const navigationVariant = mapView ? 'mapNavigation' : null;

  return (
    <>
      {desktopView ? (
        <div className={style.listOnDesktop}>
          {data.map((item, index) => (
            <Street key={index} {...item} mapView={mapView} />
          ))}
        </div>
      ) : (
        <div className={navigationVariant}>
          {data.map((item, index) => (
            <Street key={index} {...item} mapView={mapView} />
          ))}
        </div>
      )}
    </>
  );
};

export default StreetList;
