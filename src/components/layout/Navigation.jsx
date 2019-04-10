// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import style from './nav.css';
import ListIcon from '../navigation/ListIcon';
import MapIcon from '../navigation/MapIcon';

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
        <div className={style.navLogo}>logo</div>
        {detailViewVisible ? (
          <Link to="/" className={style.iconList}>
            <button>back</button>
          </Link>
        ) : isMapVisible ? (
          <Link to="/" className={style.iconList}>
            <ListIcon />
          </Link>
        ) : (
          <Link to="/map" className={style.iconList}>
            <MapIcon />
          </Link>
        )}
      </nav>
    );
  }
}

export default withRouter(Navigation);
