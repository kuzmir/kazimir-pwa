// @flow

import * as React from 'react';
import {withLocale} from '../../utils/locale/withLocale';

import Street from './Street';
import {withRouter} from 'react-router';
// TODO set albsolute paths webpack :)
import type {LocalePropsType} from '../../utils/locale/LocaleController';

type PropsType = {
  children?: React.Node
} & LocalePropsType;

const StreetListNavigation = ({data, match, showNavigation}: PropsType) => ({
  render() {
    return (
      <div className="mapNavigation">
        {data.map((item, index) => (
          <Street
            key={index}
            mapView={match.url === '/map'}
            onClick={showNavigation}
            {...item}
          />
        ))}
      </div>
    );
  }
});

export default withRouter(withLocale()(StreetListNavigation));
