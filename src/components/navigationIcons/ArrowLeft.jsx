// @flow

import * as React from 'react';

type IconPropsType = {
  color?: string
};

const ArrowLeft = ({color}: IconPropsType) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}>
    <title>icon-arrow-left</title>
    <path d="M24,24H0V0H24Z" fill="none" />
    <path d="M7.22,12.71l7.07,7.07a1,1,0,0,0,1.42-1.42L9.34,12l6.37-6.36a1,1,0,1,0-1.42-1.42L7.22,11.29A1,1,0,0,0,7.22,12.71Z" />
  </svg>
);

export default ArrowLeft;
