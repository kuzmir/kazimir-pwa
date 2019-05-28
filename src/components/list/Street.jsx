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
    const {name, id, mapView, match, history} = this.props;

    console.log('asda', this.props, mapView);

    const itemBackgroundStylesList = {
      backgroundImage: `url(${
        this.props.places.present[0].photos[0].images.small
      })`,
      backgroundSize: '100%',
      backgroundPosition: 'center center',
      minHeight: '100px'
    };

    return (
      <div
        className={style.list}
        style={!mapView ? itemBackgroundStylesList : null}
        onClick={mapView ? () => history.push(`/map/${id}`) : null}
      >
        <div className={style.listItemCover} />
        <Link to={`/street/${id}/past`} className={style.streetNavIcon}>
          <ArrowLeftIcon color="white" />
        </Link>
        <h3 className={style.itemHeadline}>{name}</h3>
        <Link to={`/street/${id}/present`} className={style.streetNavIcon}>
          <ArrowRightIcon color="white" />
        </Link>
      </div>
    );
  }
}

export default withRouter(withLocale()(Street));
