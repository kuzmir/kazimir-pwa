// @flow

import React from 'react';

type IconPropsType = {
  color?: string,
};

const Info = ({color}: IconPropsType) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 7.5" fill={color}>
    <circle cx="3" cy="3" r="3" />
    <circle cx="12" cy="3" r="3" />
    <circle cx="21" cy="3" r="3" />
  </svg>
);

export default Info;
