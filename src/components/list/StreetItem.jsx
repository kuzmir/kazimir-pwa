// @flow

import * as React from 'react';

type PropsType = {
  name: string,
  description: string
};

const StreetItem = ({name, description}: PropsType) => (
  <div>
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);

export default StreetItem;
