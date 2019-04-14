// @flow

import * as React from 'react';
import classnames from 'classnames';
import {isTimespan, PRESENT} from '../../utils/timespan';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
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

    return (
      <nav className={style.navContainer}>
        {detailViewVisible ? (
          isTimespan(this.props.match.params.timespan) === PRESENT ? (
            <Link to="/" className={style.backOnLeft}>
              <ArrowLeft />
            </Link>
          ) : (
            <Link
              to="/"
              className={classnames(
                style.navigationIcon,
                style.navigationIconRight
              )}
            >
              <ArrowRight />
            </Link>
          )
        ) : (
          <React.Fragment>
            <div className={style.navLogo}>
              <Logo />
            </div>
            {isMapVisible ? (
              <Link to="/" className={style.navigationIcon}>
                <ListIcon />
              </Link>
            ) : (
              <Link to="/map" className={style.navigationIcon}>
                <MapIcon />
              </Link>
            )}
          </React.Fragment>
        )}
      </nav>
    );
  }
}

export default withRouter(Navigation);
