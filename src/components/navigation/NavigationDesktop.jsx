// @flow

import React from 'react';
import classnames from 'classnames';
import {isTimespan, PRESENT, PAST} from '../../utils/timespan';
import {Link, useLocation, useParams} from 'react-router-dom';
import style from './navigation.css';
import ArrowLeft from '../navigationIcons/ArrowLeft';
import Logo from '../navigationIcons/Logo';
import usei18n from '../../utils/locale/i18n';

const isViewActive = (pathname, value) => pathname.includes(value);

function NavigationDesktop() {
  const {translate, changeLocale, locale, generateRoute} = usei18n();
  const location = useLocation();
  const params = useParams();
  const detailViewVisible = isViewActive(
    location.pathname,
    '/street'
  );
  
  const isPresent = isTimespan(params.timespan) === PRESENT;
  const isPast = isTimespan(params.timespan) === PAST;
  const linkClassName = classnames(style.navigationLink, {
    [`${style.navigationLinkDetail}`]: isPresent || isPast,
  });

  return (
    <nav
      className={classnames(style.navContainer, {
        [`${style.navContainerDetailPresent}`]: isPresent,
        [`${style.navContainerDetailPast}`]: isPast,
      })}
    >
      {detailViewVisible ? (
        <Link
          to={generateRoute('MAIN')}
          className={classnames(
            style.navigationIconDesktop,
            style.navigationIconSvg,
            style.navigationIconOnLeft
          )}
        >
          <ArrowLeft color="#fff" />
        </Link>
      ) : (
        <Link to={generateRoute('MAIN')} className={style.navLogo}>
          <Logo />
        </Link>
      )}

      <div className={style.navDesktopInfoLinks}>
        <Link
          to={generateRoute('CHANGE_LANGUAGE')}
          className={linkClassName}
          onClick={changeLocale}
        >
          {locale === 'pl' ? '🇺🇸' : '🇵🇱'}
        </Link>
        <Link to={generateRoute('INFO')} className={linkClassName}>
          {translate('INFO')}
        </Link>
        <Link to={generateRoute('TEAM')} className={linkClassName}>
          {translate('TEAM')}
        </Link>
        <Link to={generateRoute('PRESS')} className={linkClassName}>
          {translate('PRESS')}
        </Link>
      </div>
    </nav>
  );
}

export default NavigationDesktop;
