// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import style from './nav.css';
import ListIcon from '../navigation/ListIcon';
import MapIcon from '../navigation/MapIcon';
import ArrowRight from '../navigation/ArrowRight';
import ArrowLeft from '../navigation/ArrowLeft';

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
          this.props.match.params.timespan === 'present' ? (
            <Link to="/" className={style.backOnLeft}>
              <ArrowLeft />
            </Link>
          ) : (
            <Link to="/" className={style.iconList}>
              <ArrowRight />
            </Link>
          )
        ) : (
          <React.Fragment>
            <div className={style.navLogo}>
              <img src="../../img/kazimir-icon.png" />
            </div>
            {isMapVisible ? (
              <Link to="/" className={style.iconList}>
                <ListIcon />
              </Link>
            ) : (
              <Link to="/map" className={style.iconList}>
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
