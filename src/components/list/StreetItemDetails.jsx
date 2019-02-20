// @flow

import * as React from 'react';

type PropsType = {
  name: string,
  description: string
};

const StreetItemDetails = ({details}: PropsType) => (
  <div>
    <p>{details}</p>
  </div>
);

export default StreetItemDetails;
