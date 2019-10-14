// @flow

import React, {useState} from 'react';
import {withLocale} from '../../utils/locale/withLocale';
import Modal from '../modal/Modal';
import style from './page.css';

type TeamPropsType = {
  translate: string => string,
};

const Team = ({translate}: TeamPropsType) => {
  const [modalVisible, showModal] = useState(false);
  const [itemShown, setActiveItem] = useState(null);

  const openModal = id => {
    modalVisible ? showModal(false) : showModal(true);
    itemShown ? setActiveItem(null) : setActiveItem(id);
    console.log('open modal', id, itemShown);
  };

  const array = [
    {
      thumb: 'prada_thumb.jpg',
      large: 'prada_large.jpg',
    },
    {
      thumb: 'emaj_thumb.jpg',
      large: 'emaj_large.jpg',
    },
    {
      thumb: 'krzysiek_thumb.jpg',
      large: 'krzysiek_large.jpg',
    },
    {
      thumb: 'jan_thumb.jpg',
      large: 'jan_large.jpg',
    },
    {
      thumb: 'marta_thumb.jpg',
      large: 'marta_large.jpg',
    },
    {
      thumb: 'piotr_thumb.jpg',
      large: 'piotr_large.jpg',
    },
    {
      thumb: 'kasia_thumb.jpg',
      large: 'kasia_large.jpg',
    },
    {
      thumb: 'wika_thumb.jpg',
      large: 'wika_large.jpg',
    },
    {
      thumb: 'ania_thumb.jpg',
      large: 'ania_large.jpg',
    },
    {
      thumb: 'bartek_thumb.jpg',
      large: 'bartek_large.jpg',
    },
  ];

  return (
    <>
      <div className={style.hero} />
      <div className={style.content}>
        <h1 className={style.headline}>Team</h1>

        <div className={style.teamFlexContainer}>
          {array.map((item, index) => (
            <div
              className={style.teamItem}
              onClick={() => openModal(index)}
              key={index}
            >
              <img src={`../../images/team/${item.thumb}`} />
              <Modal
                id={itemShown}
                modalVisible={modalVisible}
                name={translate(`TEAM_${index}_NAME`)}
                info={translate(`TEAM_${index}_CONTENT`)}
                imagePath={`../../images/team/${item.large}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default withLocale()<*>(Team);
