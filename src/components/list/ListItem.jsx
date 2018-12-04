// @flow

import * as React from 'react';
import style from './list.scss';

type PropsType = {
  children?: React.Node
};

const ListItem = ({name}: PropsType) => <div>{name}</div>;

export default ListItem;
