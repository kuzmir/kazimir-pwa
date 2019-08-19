// @flow

import * as React from 'react';
import style from './slider.css';

import type {ImagesType} from '../../AppContainer';

type SlidePropsType = {
  item: {
    images: ImagesType,
  },
};

const Slide = ({item}: SlidePropsType) => {
  const styles = {
    backgroundImage: `url(${item.small})`,
  };

  return <div className={style.slide} style={styles}></div>;
};

export default Slide;
