// @flow

import * as React from 'react';

import style from './page.css';
import data from '../../static_pages_en.json';

const Info = () => {
  const infoData = data.find(({name}) => name === 'info').details;

  return (
    <>
      <div className={style.hero} />

      <div className={style.content}>
        <h1 className={style.headline}>Info</h1>

        {infoData.map(item => (
          <>
            <h4 className={style.subheadline}>{item.title}</h4>
            <p className={style.description}>{item.content}</p>
            {item.details ? (
              <p className={style.description}>{item.details}</p>
            ) : null}
          </>
        ))}
      </div>
    </>
  );
};

export default Info;
