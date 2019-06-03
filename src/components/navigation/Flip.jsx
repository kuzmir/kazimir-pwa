// @flow

import * as React from 'react';

type IconPropsType = {
  color?: string
};

const Flip = ({color}: IconPropsType) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.6 100" fill={color}>
    <path d="M49.3 26.3c7.72 0 14.58 3.7 18.91 9.41l-8.24 8.36H85.8v-26.2l-8.17 8.3a37.04 37.04 0 0 0-64.88 17.91h13.6A23.7 23.7 0 0 1 49.3 26.3zM49.3 73.7c-7.56 0-14.3-3.54-18.64-9.06l8.71-8.72h-26.6v26.65l8.43-8.45a37.04 37.04 0 0 0 64.65-18.2h-13.6A23.71 23.71 0 0 1 49.3 73.7z" />
  </svg>
);

export default Flip;
