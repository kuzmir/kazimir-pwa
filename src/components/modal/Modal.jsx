// @flow

import React from 'react';
import cx from 'classnames';
import style from './modal.css';

type ModalPropsType = {
  info: string,
  modalVisible: boolean,
  imagePath: string,
  name: string,
};

const Modal = ({info, modalVisible, imagePath, name}: ModalPropsType) => {
  return (
    <div
      className={cx(style.modal, {
        [`${style.modalVisible}`]: modalVisible,
      })}
    >
      <div className={style.overlay}>
        <div role="dialog" className={style.modalBox}>
          <div className={style.modalContent}>
            <div className={style.modalContentImage}>
              <img src={imagePath} />
            </div>
            <div className={style.modalContentInfo}>
              <h3>{name}</h3>
              <p className={style.modalContentInfoParagraph}>{info}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
