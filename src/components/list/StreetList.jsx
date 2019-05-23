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

const StreetList = ({data, match}: PropsType) => ({
  render() {
    const navigationVariant = match.url === '/map' ? 'mapNavigation' : null;

    return (
      <div className={navigationVariant}>
        {data.map((item, index) => (
          <Street key={index} {...item} mapView={match.url === '/map'} />
        ))}
      </div>
    );
  }
});

export default withRouter(withLocale()(StreetList));
