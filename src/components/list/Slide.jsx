// @flow

import * as React from 'react';
import style from './slider.css';

type SlidePropsType = {};

const Slide = ({item}: SlidePropsType) => {
  const styles = {
    backgroundImage: `url(${item.images.small})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
  };

  return <div className="slide" style={styles}></div>;
};

export default Slide;
