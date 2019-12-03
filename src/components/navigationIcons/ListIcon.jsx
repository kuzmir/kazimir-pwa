// @flow

// import * as React from 'react';

// const ListIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="270.67 255 48 34">
//     <path
//       fill="#424242"
//       d="M286.1 260.1h30.85c.95 0 1.72-.76 1.72-1.7s-.77-1.7-1.72-1.7H286.1c-.95 0-1.72.76-1.72 1.7s.77 1.7 1.72 1.7zm-12 8.5a3.41 3.41 0 0 0-3.43 3.4c0 1.88 1.53 3.4 3.43 3.4s3.42-1.52 3.42-3.4-1.53-3.4-3.42-3.4zm0 13.6a3.41 3.41 0 0 0-3.43 3.4c0 1.88 1.53 3.4 3.43 3.4s3.42-1.52 3.42-3.4-1.53-3.4-3.42-3.4zm42.85-11.9H286.1a1.7 1.7 0 0 0-1.72 1.7c0 .94.77 1.7 1.72 1.7h30.85a1.7 1.7 0 0 0 1.72-1.7c0-.94-.77-1.7-1.72-1.7zM274.1 255a3.41 3.41 0 0 0-3.43 3.4c0 1.88 1.53 3.4 3.43 3.4s3.42-1.52 3.42-3.4-1.53-3.4-3.42-3.4zm42.85 28.9H286.1a1.7 1.7 0 0 0-1.72 1.7c0 .94.77 1.7 1.72 1.7h30.85a1.7 1.7 0 0 0 1.72-1.7c0-.94-.77-1.7-1.72-1.7z"
//     />
//   </svg>
// );

// export default ListIcon;

import * as React from 'react';

type IconPropsType = {
  color?: string,
};

const ListIcon = ({color}: IconPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={color}
  >
    <g fill="none">
      <path d="M0 0h24v24H0V0z" />
      <path opacity=".87" d="M0 0h24v24H0V0z" />
    </g>
    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
  </svg>
);

export default ListIcon;
