// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import {withLocale} from '../../utils/locale/withLocale';
import {withRouter} from 'react-router';
// TODO set albsolute paths webpack :)
import type {LocalePropsType} from '../../utils/locale/LocaleContext';
import ArrowLeftIcon from '../navigation/ArrowLeft';
import ArrowRightIcon from '../navigation/ArrowRight';

import style from './list.css';

type PropsType = {} & LocalePropsType;

class Street extends React.Component<PropsType> {
  render() {
    const {name, id} = this.props;

    return (
      <div className={style.list}>
        <Link to={`/street/${id}/past`} className={style.streetNavIcon}>
          <ArrowLeftIcon />
        </Link>
        <h3>{name}</h3>
        <Link to={`/street/${id}/present`} className={style.streetNavIcon}>
          <ArrowRightIcon />
        </Link>
      </div>
    );
  }
}

export default withRouter(withLocale()(Street));
