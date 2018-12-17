// @flow

import * as React from 'react';
import {withLocale} from '../../utils/locale/withLocale';
// TODO set albsolute paths webpack :)
import type {LocalePropsType} from '../../utils/locale/LocaleController';
import StreetName from './StreetName';
import StreetItem from './StreetItem';

import style from './list.scss';

type PropsType = {
  children?: React.Node,
  detailsOpened: () => void
} & LocalePropsType;

class List extends React.Component<PropsType> {
  render() {
    const {name, placesPast, placesPresent, openDetails, locale} = this.props;

    return (
      <div className={style.foo}>
        <div>
          {placesPast.map(item => (
            <div>
              <StreetName key={item.id} name={name} openDetails={openDetails} />
              <StreetItem
                description={item.details[locale].description}
                name={item.details[locale].name}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withLocale()(List);
