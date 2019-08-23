// @flow

import * as React from 'react';
import classnames from 'classnames';
import {isTimespan, PRESENT, PAST} from '../../utils/timespan';
import {Link, withRouter} from 'react-router-dom';
import style from './navigation.css';
import ArrowLeft from '../navigationIcons/ArrowLeft';
import Logo from '../navigationIcons/Logo';

const isViewActive = (pathname, value) => pathname.includes(value);

class Navigation extends React.Component<*, *> {
  render() {
    const detailViewVisible = isViewActive(
      this.props.location.pathname,
      '/street'
    );
    const isPresent = isTimespan(this.props.match.params.timespan) === PRESENT;
    const isPast = isTimespan(this.props.match.params.timespan) === PAST;

    return (
      <nav
        className={classnames(style.navContainer, {
          [`${style.navContainerDetailPresent}`]: isPresent,
          [`${style.navContainerDetailPast}`]: isPast,
        })}
      >
        {detailViewVisible ? (
          <Link
            to="/"
            className={classnames(
              style.navigationIconDesktop,
              style.navigationIconSvg,
              style.navigationIconOnLeft
            )}
          >
            <ArrowLeft color="#fff" />
          </Link>
        ) : (
          <Link to="/" className={style.navLogo}>
            <Logo />
          </Link>
        )}

        <div className={style.navDesktopInfoLinks}>
          <Link
            to="/info"
            className={classnames(style.navigationLink, {
              [`${style.navigationLinkDetail}`]: isPresent || isPast,
            })}
          >
            Info
          </Link>
          <Link
            to="/team"
            className={classnames(style.navigationLink, {
              [`${style.navigationLinkDetail}`]: isPresent || isPast,
            })}
          >
            Team
          </Link>
          <Link
            to="/press"
            className={classnames(style.navigationLink, {
              [`${style.navigationLinkDetail}`]: isPresent || isPast,
            })}
          >
            Press
          </Link>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navigation);
