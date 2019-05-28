// @flow
import * as React from 'react';

type CurrentPropsPropType = {};
type WithPropsPropsType = {
  callback: CurrentPropsPropType => Object,
  Component: React.Node
};

const withProps = (callback, Component): WithPropsPropsType => {
  const WrappedComponent = (currentProps: CurrentPropsPropType) => (
    <Component {...callback(currentProps)} />
  );

  WrappedComponent.displayName = `withProps(${Component.displayName ||
    Component.name}`;

  return WrappedComponent;
};

export default withProps;
