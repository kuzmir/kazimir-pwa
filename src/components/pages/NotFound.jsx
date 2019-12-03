// @flow strict

import React from 'react';
import cx from 'classnames';
import layoutStyle from '../../layout.css';
import style from './page.css';
import {useI18n} from '../../utils/locale/I18n';

const Info = () => {
  const {translate} = useI18n();

  return (
    <>
      <div className={style.hero} />
      <div
        className={cx(
          layoutStyle.box,
          layoutStyle.boxSmall,
          layoutStyle.boxWithoutScroll
        )}
      ></div>

      <div className={cx(layoutStyle.box, layoutStyle.boxLarge)}>
        <div className={style.pageContent}>
          <h1 className={style.headline}>404 Not Found</h1>

          <h4 className={style.subheadline}>{translate('NOT_FOUND')}</h4>
        </div>
      </div>
    </>
  );
};

export default Info;
