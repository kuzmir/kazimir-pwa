// @flow

import React, {useState} from 'react';
import {withLocale} from '../../utils/locale/withLocale';
import Modal from '../modal/Modal';
import style from './page.css';

type TeamPropsType = {
  translate: string => string,
};

const names = [
  'prada',
  'emaj',
  'krzysiek',
  'jan',
  'marta',
  'piotr',
  'kasia',
  'wika',
  'ania',
  'bartek',
];

const Team = ({translate}: TeamPropsType) => {
  const [nameSet, setActiveItem] = useState(null);

  const handleClose = () => {
    setActiveItem(null);
  };

  const openModal = name => {
    nameSet ? setActiveItem(null) : setActiveItem(name);
  };

  return (
    <>
      <div className={style.hero} />
      <div className={style.content}>
        <h1 className={style.headline}>Team</h1>

        <div className={style.teamFlexContainer}>
          {names.map((name, index) => (
            <div
              className={style.teamItem}
              onClick={() => openModal(name)}
              key={index}
            >
              <img src={`../../images/team/${name}_thumb.jpg`} />
            </div>
          ))}
        </div>
        {nameSet && (
          <Modal
            handleClose={handleClose}
            name={translate(`TEAM_${nameSet.toUpperCase()}_NAME`)}
            info={translate(`TEAM_${nameSet.toUpperCase()}_CONTENT`)}
            imagePath={`../../images/team/${nameSet}_large.jpg`}
          />
        )}
      </div>
    </>
  );
};

export default withLocale()<*>(Team);
