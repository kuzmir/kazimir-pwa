// @flow

import * as React from 'react';
import {Polyline} from 'react-leaflet';
import {withRouter} from 'react-router-dom';
import type {RouterHistory} from 'react-router-dom';

type MapStreetLinesType = {
  streets: Object,
  activeId: number,
  history: RouterHistory,
};

const ACTIVE_COLOR = '#40a9bc';
const INACTIVE_COLOR = '#888888';

const MapStreetLines = ({streets, activeId, history}: MapStreetLinesType) =>
  streets.map(street => (
    <Polyline
      key={street.id}
      color={street.id === activeId ? ACTIVE_COLOR : INACTIVE_COLOR}
      weight={6}
      opacity={0.85}
      positions={street.path.coordinates}
      onClick={() => history.push(`/street/${street.id}/present`)}
    />
  ));

export default withRouter(MapStreetLines);
