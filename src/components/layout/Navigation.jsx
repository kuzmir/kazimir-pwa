// @flow

import * as React from 'react';
import classnames from 'classnames';
import {isTimespan, PRESENT} from '../../utils/timespan';
import {Link, withRouter} from 'react-router-dom';
import style from './navigation.css';
import ListIcon from '../navigation/ListIcon';
import MapIcon from '../navigation/MapIcon';
import ArrowRight from '../navigation/ArrowRight';
import ArrowLeft from '../navigation/ArrowLeft';
import Logo from '../navigation/Logo';

const isViewActive = (pathname, value) => pathname.includes(value);

class Navigation extends React.Component<*, *> {
  render() {
    const isMapVisible = isViewActive(this.props.location.pathname, '/map');
    const detailViewVisible = isViewActive(
      this.props.location.pathname,
      '/street'
    );

    return detailViewVisible ? (
      <React.Fragment>
        {isTimespan(this.props.match.params.timespan) === PRESENT ? (
          <Link
            to="/"
            className={classnames(style.navigationIcon, style.backOnLeft)}
          >
            <ArrowLeft color="#fff" />
          </Link>
        ) : (
          <Link
            to="/"
            className={classnames(style.navigationIcon, style.backOnRight)}
          >
            <ArrowRight color="#fff" />
          </Link>
        )}
      </React.Fragment>
    ) : (
      <nav className={style.navContainer}>
        <div className={style.navLogo}>
          <Logo />
        </div>
        {isMapVisible ? (
          <Link to="/" className={style.navigationIcon}>
            <ListIcon color="#000" />
          </Link>
        ) : (
          <Link to="/map/1" className={style.navigationIcon}>
            <MapIcon color="#000" />
          </Link>
        )}
      </nav>
    );
  }
}

export default withRouter(Navigation);
