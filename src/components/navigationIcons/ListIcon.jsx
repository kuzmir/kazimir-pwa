// @flow

import * as React from 'react';

type IconPropsType = {
  color?: string,
};

const ListIcon = ({color}: IconPropsType) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -150 600 900" fill={color}>
    <path d="M540,70H60c-5.523,0-10-4.477-10-10s4.477-10,10-10h480c5.522,0,10,4.477,10,10S545.522,70,540,70z" />
    <path d="M480,230H60c-5.523,0-10-4.477-10-10s4.477-10,10-10h420c5.522,0,10,4.477,10,10S485.522,230,480,230z" />
    <path d="M420,390H60c-5.523,0-10-4.478-10-10s4.477-10,10-10h360c5.522,0,10,4.478,10,10S425.522,390,420,390z" />
    <path d="M360,550H60c-5.523,0-10-4.478-10-10s4.477-10,10-10h300c5.522,0,10,4.478,10,10S365.522,550,360,550z" />
  </svg>
);

export default ListIcon;
