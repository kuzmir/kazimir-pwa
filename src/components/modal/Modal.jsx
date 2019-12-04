// @flow

import React from 'react';
import cx from 'classnames';
import style from './modal.css';
import CloseIcon from '../navigationIcons/CloseIcon';

type ModalPropsType = {
  info: string,
  imagePath: string,
  name: string,
  handleClose: () => mixed,
};

const Modal = ({handleClose, info, imagePath, name}: ModalPropsType) => {
  return (
    <div className={cx(style.modal, style.modalVisible)}>
      <div className={style.overlay} onClick={handleClose}>
        <div role="dialog" className={style.modalBox}>
          <button className={style.modalCloseButton} onClick={handleClose}>
            <CloseIcon color="#000000" />
          </button>
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
