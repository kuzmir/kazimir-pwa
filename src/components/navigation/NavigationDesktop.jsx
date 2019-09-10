// @flow

import * as React from 'react';
import classnames from 'classnames';
import {isTimespan, PRESENT, PAST} from '../../utils/timespan';
import {Link, withRouter} from 'react-router-dom';
import style from './navigation.css';
import ArrowLeft from '../navigationIcons/ArrowLeft';
import Logo from '../navigationIcons/Logo';
import {slugifyStreetName} from '../../utils/url';
import {withLocale} from '../../utils/locale/withLocale';

const isViewActive = (pathname, value) => pathname.includes(value);

class Navigation extends React.Component<*, *> {
  render() {
    const {translate, changeLocale, locale, generateRoute} = this.props;
    const detailViewVisible = isViewActive(
      this.props.location.pathname,
      '/street'
    );
    const isPresent = isTimespan(this.props.match.params.timespan) === PRESENT;
    const isPast = isTimespan(this.props.match.params.timespan) === PAST;
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
          <Link
            to={generateRoute('INFO')}
            className={linkClassName}
          >
            {translate('INFO')}
          </Link>
          <Link
            to={generateRoute('TEAM')}
            className={linkClassName}
          >
            {translate('TEAM')}
          </Link>
          <Link
            to={generateRoute('PRESS')}
            className={linkClassName}
          >
            {translate('PRESS')}
          </Link>
        </div>
      </nav>
    );
  }
}

export default withLocale()<*>(withRouter(Navigation));
