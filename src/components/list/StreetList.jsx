// @flow strict

import React from 'react';

import cx from 'classnames';
import Street from './Street';
import type {StreetType} from '../../AppContainer';
import style from './list.css';

type StreetListPropsType = {
  data: Array<StreetType>,
  className?: string,
  mapView?: boolean,
};

const StreetList = ({data, className, mapView}: StreetListPropsType) => {

  return (
    <div className={cx(style.list, className, {
      [style.listOnMap]: mapView
    })}>
      {data.map((item, index) => (
        <Street key={index} {...item} mapView={mapView}/>
      ))}
    </div>
  );
};

export default StreetList;
