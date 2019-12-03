// @flow

// import * as React from 'react';

// const MapIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="242.5 195.41 46 46">
//     <path
//       fill="#424242"
//       d="M255.44 209.78c-.8 0-1.44.65-1.44 1.44v14.37a1.44 1.44 0 1 0 2.88 0v-14.37c0-.8-.65-1.44-1.44-1.44zm12.94 5.75a1.44 1.44 0 0 0-2.88 0v8.63a1.44 1.44 0 1 0 2.88 0v-8.63m8.62-20.12l-11.5 8.62-11.5-4.31-11.5 7.19v34.5l11.5-7.2 11.5 4.32 11.5-8.62 11.5 8.62v-34.5l-11.5-8.62zm8.63 38.09l-8.63-6.47-11.5 8.63-11.5-4.32-8.63 5.4v-28.76l8.63-5.39 11.5 4.32 11.5-8.63 8.63 6.47v28.75zM277 219.84a1.44 1.44 0 1 0 2.88 0v-11.5a1.44 1.44 0 0 0-2.88 0v11.5z"
//     />
//   </svg>
// );

// export default MapIcon;

import * as React from 'react';

type IconPropsType = {
  color?: string,
};

const MapIcon = ({color}: IconPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={color}
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z" />
  </svg>
);

export default MapIcon;
