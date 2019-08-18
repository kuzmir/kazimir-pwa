// @flow

import * as React from 'react';
import classnames from 'classnames';
import {isTimespan, PRESENT} from '../../utils/timespan';
import {Link, withRouter} from 'react-router-dom';
import style from './navigation.css';
import ListIcon from '../navigationIcons/ListIcon';
import MapIcon from '../navigationIcons/MapIcon';
import ArrowRight from '../navigationIcons/ArrowRight';
import ArrowLeft from '../navigationIcons/ArrowLeft';
import Logo from '../navigationIcons/Logo';

const isViewActive = (pathname, value) => pathname.includes(value);

class Navigation extends React.Component<*, *> {
  render() {
    const isMapVisible = isViewActive(this.props.location.pathname, '/map');
    const detailViewVisible = isViewActive(
      this.props.location.pathname,
      '/street'
    );

    return detailViewVisible ? (
      <>
        {isTimespan(this.props.match.params.timespan) === PRESENT ? (
          <nav
            className={classnames(
              style.navContainerDetail,
              style.navContainerDetailPresent
            )}
          >
            <Link
              to="/"
              className={classnames(
                style.navigationIcon,
                style.navigationIconSvg,
                style.navigationIconOnLeft
              )}
            >
              <ArrowLeft color="#fff" />
            </Link>
            <h3>{this.props.streetName}</h3>
          </nav>
        ) : (
          <nav
            className={classnames(
              style.navContainerDetail,
              style.navigationIconSvg,
              style.navContainerDetailPast
            )}
          >
            <h3>{this.props.streetName}</h3>
            <Link
              to="/"
              className={classnames(
                style.navigationIcon,
                style.navigationIconSvg,
                style.navigationIconOnRight
              )}
            >
              <ArrowRight color="#fff" />
            </Link>
          </nav>
        )}
      </>
    ) : (
      <nav className={style.navContainer}>
        <div className={style.navLogo}>
          <Logo />
        </div>
        {isMapVisible ? (
          <Link
            to="/"
            className={classnames(
              style.navigationMainMobileSwitchIcon,
              style.navigationIconSvg,
              style.navigationIconOnRight
            )}
            aria-label="Switch to list view"
          >
            <ListIcon color="#000" />
          </Link>
        ) : (
          <Link
            to="/map/1"
            className={classnames(
              style.navigationMainMobileSwitchIcon,
              style.navigationIconSvg,
              style.navigationIconOnRight
            )}
            aria-label="Switch to map view"
          >
            <MapIcon color="#000" />
          </Link>
        )}
      </nav>
    );
  }
}

export default withRouter(Navigation);
