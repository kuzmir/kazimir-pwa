// @flow

import * as React from 'react';
import {withLocale} from '../../utils/locale/withLocale';
// TODO set albsolute paths webpack :)
import type {LocalePropsType} from '../../utils/locale/LocaleController';

import style from './list.scss';

type PropsType = {
  children?: React.Node
} & LocalePropsType;

class List extends React.Component<PropsType> {
  render() {
    const {name, placesPast, placesPresent, locale} = this.props;

    console.log(locale);
    return (
      <div className={style.foo}>
        <div>{name}</div>
        <div>
          {placesPast.map(item => (
            <div>{item.details[locale].description}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default List;
