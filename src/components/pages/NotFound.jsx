// @flow

import * as React from 'react';

import style from './page.css';

const Info = () => (
  <>
    <div className={style.content}>
      <img src="/images/icon.png" className={style.image}/>
    </div>
    <div className={style.content}>
      <h1 className={style.headline}>404 not found</h1>

      <p>Unfortunately, the page you are looking for is not here.</p>
    </div> 
  </>
);  

export default Info;
