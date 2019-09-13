// @flow

import * as React from 'react';
import {Polyline} from 'react-leaflet';
import {withRouter} from 'react-router-dom';
import type {RouterHistory} from 'react-router-dom';
import {slugifyStreetName} from '../../utils/url';
import {withLocale} from '../../utils/locale/withLocale';

type MapStreetLinesType = {
  streets: Object,
  activeId: number,
  history: RouterHistory,
  generateRoute: (string, Object | null) => string,
};

const ACTIVE_COLOR = '#40a9bc';
const INACTIVE_COLOR = '#888888';

const MapStreetLines = ({streets, activeId, history, generateRoute}: MapStreetLinesType) =>
  streets.map(street => (
    <Polyline
      key={street.id}
      color={street.id === activeId ? ACTIVE_COLOR : INACTIVE_COLOR}
      weight={6}
      opacity={0.85}
      positions={street.coordinates}
      onClick={() => history.push(
        generateRoute('STREET', {
          name: slugifyStreetName(street.name),
          timespan: 'present'
        }))}
    />
  ));

export default withLocale()<*>(withRouter(MapStreetLines));
