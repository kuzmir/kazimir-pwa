// @flow

import * as React from 'react';
import {withLocale} from '../../utils/locale/withLocale';

import Street from './Street';
import {withRouter} from 'react-router';
// TODO set albsolute paths webpack :)
import type {LocalePropsType} from '../../utils/locale/LocaleController';
import style from './list';

type PropsType = {
  children?: React.Node
} & LocalePropsType;

const StreetList = ({mapView, data}: PropsType) => ({
  render() {
    const navigationVariant = mapView ? 'mapNavigation' : null;

    return (
      <div className={navigationVariant}>
        {data.map((item, index) => (
          <Street key={index} {...item} mapView={mapView ? mapView : null} />
        ))}
      </div>
    );
  }
});

export default withRouter(withLocale()(StreetList));
