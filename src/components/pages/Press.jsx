// @flow

import * as React from 'react';

import style from './page.css';

const Press = () => (
  <>
    <div className={style.hero} />

    <div className={style.content}>
      <h1 className={style.headline}>Press</h1>

      <div className={style.teamFlexContainer}>
        <div className={style.teamItem}>item</div>
        <div className={style.teamItem}>item</div>
        <div className={style.teamItem}>item</div>
        <div className={style.teamItem}>item</div>
        <div className={style.teamItem}>item</div>
        <div className={style.teamItem}>item</div>
        <div className={style.teamItem}>item</div>
        <div className={style.teamItem}>item</div>
        <div className={style.teamItem}>item</div>
      </div>
    </div>
  </>
);

export default Press;
