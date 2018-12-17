// @flow

import * as React from 'react';

type PropsType = {
  name: string,
  openDetails: () => void
};

const StreetName = ({name, openDetails}: PropsType) => (
  <button onClick={openDetails}>{name}</button>
);

export default StreetName;
