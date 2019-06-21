// @flow

import * as React from 'react';

type IconPropsType = {
  color?: string
};

const ArrowRight = ({color}: IconPropsType) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}>
    <title>arrow-right</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M16.78 11.29L9.71 4.22a1 1 0 0 0-1.42 1.42L14.66 12l-6.37 6.36a1 1 0 0 0 1.42 1.42l7.07-7.07a1 1 0 0 0 0-1.42z" />
  </svg>
);

export default ArrowRight;
