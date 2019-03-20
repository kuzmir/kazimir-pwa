// @flow

import * as React from 'react';

import Navigation from './Navigation';

type PropsType = {
  children: React.Node
};

const Layout = (props: PropsType) => (
  <React.Fragment>
    <Navigation {...props} />
    {props.children}
  </React.Fragment>
);

export default Layout;
