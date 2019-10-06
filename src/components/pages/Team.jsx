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

  const openModal = () => {
    modalVisible ? showModal(false) : showModal(true);
  };

  return (
    <>
      <div className={style.hero} />
      <div className={style.content}>
        <h1 className={style.headline}>Team</h1>

        <div className={style.teamFlexContainer}>
          <div className={style.teamItem} onClick={openModal}>
            <img src="../../images/team/prada_thumb.jpg" />
            <Modal
              modalVisible={modalVisible}
              name={translate('TEAM_1_NAME')}
              info={translate('TEAM_1_CONTENT')}
              imagePath="../../images/team/prada_large.jpg"
            />
          </div>
          <div className={style.teamItem} onClick={openModal}>
            <img src="../../images/team/emaj_thumb.jpg" />
            <Modal
              modalVisible={modalVisible}
              name={translate('TEAM_2_NAME')}
              info={translate('TEAM_2_CONTENT')}
              imagePath="../../images/team/emaj_large.jpg"
            />
          </div>
          <div className={style.teamItem} onClick={openModal}>
            <img src="../../images/team/krzysiek_thumb.jpg" />
            <Modal
              modalVisible={modalVisible}
              name={translate('TEAM_3_NAME')}
              info={translate('TEAM_3_CONTENT')}
              imagePath="../../images/team/krzysiek_large.jpg"
            />
          </div>
          <div className={style.teamItem} onClick={openModal}>
            <img src="../../images/team/jan_thumb.jpg" />
            <Modal
              modalVisible={modalVisible}
              name={translate('TEAM_4_NAME')}
              info={translate('TEAM_4_CONTENT')}
              imagePath="../../images/team/jan_large.jpg"
            />
          </div>
          <div className={style.teamItem} onClick={openModal}>
            <img src="../../images/team/marta_thumb.jpg" />
            <Modal
              modalVisible={modalVisible}
              name={translate('TEAM_5_NAME')}
              info={translate('TEAM_5_CONTENT')}
              imagePath="../../images/team/marta_large.jpg"
            />
          </div>
          <div className={style.teamItem} onClick={openModal}>
            <img src="../../images/team/piotr_thumb.jpg" />
            <Modal
              modalVisible={modalVisible}
              name={translate('TEAM_6_NAME')}
              info={translate('TEAM_6_CONTENT')}
              imagePath="../../images/team/piotr_large.jpg"
            />
          </div>
          <div className={style.teamItem} onClick={openModal}>
            <img src="../../images/team/kasia_thumb.jpg" />
            <Modal
              modalVisible={modalVisible}
              name={translate('TEAM_7_NAME')}
              info={translate('TEAM_7_CONTENT')}
              imagePath="../../images/team/kasia_large.jpg"
            />
          </div>
          <div className={style.teamItem} onClick={openModal}>
            <img src="../../images/team/wika_thumb.jpg" />
            <Modal
              modalVisible={modalVisible}
              name={translate('TEAM_8_NAME')}
              info={translate('TEAM_8_CONTENT')}
              imagePath="../../images/team/wika_large.jpg"
            />
          </div>
          <div className={style.teamItem} onClick={openModal}>
            <img src="../../images/team/ania_thumb.jpg" />
            <Modal
              modalVisible={modalVisible}
              name={translate('TEAM_9_NAME')}
              info={translate('TEAM_9_CONTENT')}
              imagePath="../../images/team/ania_large.jpg"
            />
          </div>
          <div className={style.teamItem} onClick={openModal}>
            <img src="../../images/team/bartek_thumb.jpg" />
            <Modal
              modalVisible={modalVisible}
              name={translate('TEAM_10_NAME')}
              info={translate('TEAM_10_CONTENT')}
              imagePath="../../images/team/bartek_large.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default withLocale()<*>(Team);
