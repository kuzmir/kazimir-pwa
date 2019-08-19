// @flow

import * as React from 'react';
import style from './slider.css';

import type {PhotoType} from '../../AppContainer';

type SlidePropsType = {
  item: PhotoType,
};

const Slide = ({item}: SlidePropsType) => {
  const styles = {
    backgroundImage: `url(${item.small})`,
  };

  return <div className={style.slide} style={styles}></div>;
};

export default Slide;
