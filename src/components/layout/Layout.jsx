// @flow

import * as React from 'react';

import Navigation from './Navigation';
import style from './layout.css';

type PropsType = {
  children: React.Node
};

const Layout = (props: PropsType) => (
  <div className={style.layoutContainer}>
    <Navigation {...props} />
    {props.children}
  </div>
);

export default Layout;
