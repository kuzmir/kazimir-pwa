// @flow

import * as React from 'react';
import style from './slider.css';

type ImagesType = {
  small: 'string',
};

type SlidePropsType = {
  item: {
    images: ImagesType,
  },
};

const Slide = ({item}: SlidePropsType) => {
  const styles = {
    backgroundImage: `url(${item.images.small})`,
  };

  return <div className={style.slide} style={styles}></div>;
};

export default Slide;
