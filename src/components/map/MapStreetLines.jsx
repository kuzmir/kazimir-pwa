// @flow

import React from 'react';
import {Polyline} from 'react-leaflet';
// $FlowFixMe https://github.com/ReactTraining/react-router/issues/6944
import {useHistory} from 'react-router-dom';
import type {RouterHistory} from 'react-router-dom';
import {slugifyStreetName} from '../../utils/url';
import {useI18n} from '../../utils/locale/I18n';

type MapStreetLinesType = {
  streets: Object,
  activeId: number,
};

const ACTIVE_COLOR = '#40a9bc';
const INACTIVE_COLOR = '#888888';

const MapStreetLines = ({streets, activeId}: MapStreetLinesType) => {
  const {generateRoute} = useI18n();
  const history = useHistory();

  return (
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
    ))
  );
}
  

export default MapStreetLines;
