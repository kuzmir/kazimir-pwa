// @flow

import React from 'react';
import {withLocale} from '../../utils/locale/withLocale';
import style from './page.css';
import usei18n from '../../utils/locale/i18n';

const Info = () => {
  const {translate} = usei18n();
  return (
    <>
      <div className={style.hero} />

      <div className={style.content}>
        <h1 className={style.headline}>Info</h1>

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
      </div>
    </>
  );
};

export default Info;
