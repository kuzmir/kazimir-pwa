// @flow
import * as React from 'react';

import Street from './Street';
import type {LocaleContextType} from '../../utils/locale/LocaleContext';
import type {StreetType} from '../../AppContainer';

type StreetListPropsType = {
  data: Array<StreetType>,
  mapView?: boolean
};

const StreetList = ({mapView, data}: StreetListPropsType) => {
  const navigationVariant = mapView ? 'mapNavigation' : null;

  return (
    <div className={navigationVariant}>
      {data.map((item, index) => (
        <Street key={index} {...item} mapView={mapView ? mapView : null} />
      ))}
    </div>
  );
};

export default StreetList;
