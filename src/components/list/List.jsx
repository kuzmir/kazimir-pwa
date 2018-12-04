// @flow

import * as React from 'react';
import style from './list.scss';
import ListItem from './ListItem';

type PropsType = {
  children?: React.Node
};
class List extends React.Component<PropsType> {
  render() {
    const {name, placesPast, placesPresent} = this.props;

    console.log(placesPresent, placesPast);
    return (
      <div className={style.foo}>
        <div>{name}</div>
      </div>
    );
  }
}

export default List;
