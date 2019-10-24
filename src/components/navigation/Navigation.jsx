// @flow

import React from 'react';
import {useParams, useLocation} from 'react-router-dom';
import classnames from 'classnames';
import {isTimespan, PRESENT} from '../../utils/timespan';
import {Link, withRouter} from 'react-router-dom';
import style from './navigation.css';
import ListIcon from '../navigationIcons/ListIcon';
import MapIcon from '../navigationIcons/MapIcon';
import ArrowRight from '../navigationIcons/ArrowRight';
import ArrowLeft from '../navigationIcons/ArrowLeft';
import Logo from '../navigationIcons/Logo';
import {withLocale} from '../../utils/locale/withLocale';
import usei18n from '../../utils/locale/i18n';

const isViewActive = (pathname, value) => pathname.includes(value);

function Navigation({streetName}: {streetName: string}) {
  const location = useLocation();
  const {timespan = 'present'} = useParams();
  const {generateRoute} = usei18n();

  const isMapVisible = isViewActive(location.pathname, '/map');
  const detailViewVisible = isViewActive(
    location.pathname,
    '/street'
  );

  return detailViewVisible ? (
    <>
      {isTimespan(timespan) === PRESENT ? (
        <nav
          className={classnames(
            style.navContainerDetail,
            style.navContainerDetailPresent
          )}
        >
          <Link
            to={generateRoute('MAIN')}
            className={classnames(
              style.navigationIcon,
              style.navigationIconSvg,
              style.navigationIconOnLeft
            )}
          >
            <ArrowLeft color="#fff" />
          </Link>
          <h3>{streetName}</h3>
        </nav>
      ) : (
        <nav
          className={classnames(
            style.navContainerDetail,
            style.navigationIconSvg,
            style.navContainerDetailPast
          )}
        >
          <h3>{streetName}</h3>
          <Link
            to={generateRoute('MAIN')}
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
      <Link to={generateRoute('MAIN')} className={style.navLogo}>
        <Logo />
      </Link>
      {isMapVisible ? (
        <Link
          to={generateRoute('MAIN')}
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
          to={generateRoute('MAP', {name: 'miodowa'})}
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

export default Navigation;
