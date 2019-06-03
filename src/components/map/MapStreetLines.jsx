// @flow

import * as React from 'react';
import {Polyline} from 'react-leaflet';

type MapStreetLinesType = {
  streets: Object,
  activeId: number
};

const MapStreetLines = ({streets, activeId}: MapStreetLinesType) => streets.map(street => (
    <Polyline
      key={street.id}
      color={street.id === activeId ? 'blue' : 'gray'}
      weight={5}
      opacity={0.8}
      positions={street.path.coordinates}
    />
  ));

export default MapStreetLines;
