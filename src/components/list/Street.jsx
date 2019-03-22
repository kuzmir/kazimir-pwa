// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import {withLocale} from '../../utils/locale/withLocale';
import {withRouter} from 'react-router';
// TODO set albsolute paths webpack :)
import type {LocalePropsType} from '../../utils/locale/LocaleContext';

import style from './list.css';

type PropsType = {} & LocalePropsType;

class Street extends React.Component<PropsType> {
  render() {
    const {name, id} = this.props;

    return (
      <div className={style.list}>
        <Link to={`/street/${id}/past`}>Past</Link>
        <h1>{name}</h1>
        <Link to={`/street/${id}/present`}>Present</Link>
      </div>
    );
  }
}

export default withRouter(withLocale()(Street));
