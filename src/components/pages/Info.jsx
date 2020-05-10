// @flow strict

import React from 'react';
import cx from 'classnames';
import layoutStyle from '../../layout.css';
import style from './page.css';
import {useI18n} from '../../utils/locale/I18n';

const Info = () => {
  const {translate} = useI18n();

  return (
    <div className={cx(layoutStyle.box, layoutStyle.boxStatic)}>
      <div className={style.pageContent}>
        <h1 className={style.headline}>{translate('INFO')}</h1>

        <h4 className={style.subheadline}>
          {translate('INFO_PARAGRAPH_1_TITLE')}
        </h4>
        <p className={style.description}>
          {translate('INFO_PARAGRAPH_1_CONTENT')}
        </p>

        <h4 className={style.subheadline}>
          {translate('INFO_PARAGRAPH_2_TITLE')}
        </h4>
        <p className={style.description}>
          {translate('INFO_PARAGRAPH_2_CONTENT')}
        </p>
        <p className={style.description}>
          {translate('INFO_PARAGRAPH_2_CONTENT_1')}
        </p>

        <h4 className={style.subheadline}>
          {translate('INFO_PARAGRAPH_3_TITLE')}
        </h4>
        <p className={style.description}>
          {translate('INFO_PARAGRAPH_3_CONTENT')}
        </p>

        <h4 className={style.subheadline}>
          {translate('INFO_PARAGRAPH_4_TITLE')}
        </h4>
        <div className={style.gifImage}>
          <img src="../../images/kazimir-ios.gif" />
        </div>
        <h4 className={style.subheadline}>We <span role="img" aria-label="heart">♥️</span> open source!</h4>
        <div className={style.openLinks}>
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            className={style.openLinksElements}
          >
            <img
              alt="Licencja Creative Commons"
              src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
            />
          </a>
          <a
            href="https://github.com/burakukula/kazimir-pwa"
            className={style.openLinksElements}
          >
            <img src="../../images/GitHub_Logo.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
