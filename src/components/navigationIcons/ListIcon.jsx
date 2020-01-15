// @flow

import * as React from 'react';

type IconPropsType = {
  color?: string,
};

const ListIcon = ({color}: IconPropsType) => (
  // <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   width="24"
  //   height="24"
  //   viewBox="0 0 24 24"
  //   fill={color}
  // >
  //   <g fill="none">
  //     <path d="M0 0h24v24H0V0z" />
  //     <path opacity=".87" d="M0 0h24v24H0V0z" />
  //   </g>
  //   <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
  // </svg>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -150 600 900" fill={color}>
    <path d="M540,70H60c-5.523,0-10-4.477-10-10s4.477-10,10-10h480c5.522,0,10,4.477,10,10S545.522,70,540,70z" />
    <path d="M480,230H60c-5.523,0-10-4.477-10-10s4.477-10,10-10h420c5.522,0,10,4.477,10,10S485.522,230,480,230z" />
    <path d="M420,390H60c-5.523,0-10-4.478-10-10s4.477-10,10-10h360c5.522,0,10,4.478,10,10S425.522,390,420,390z" />
    <path d="M360,550H60c-5.523,0-10-4.478-10-10s4.477-10,10-10h300c5.522,0,10,4.478,10,10S365.522,550,360,550z" />
  </svg>
);

export default ListIcon;
