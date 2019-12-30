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
      </div>
    </div>
  );
};

export default Info;
