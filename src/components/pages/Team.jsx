// @flow

import * as React from 'react';

import style from './page.css';

const Team = () => (
  <>
    <div className={style.hero} />
    <div className={style.content}>
      <h1 className={style.headline}>Team</h1>

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

export default Team;
