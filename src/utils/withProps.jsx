import * as React from 'react';

const withProps = (callback, Component) => {
  const WrappedComponent = (currentProps: Props) => (
    <Component {...callback(currentProps)} />
  );

  WrappedComponent.displayName = `withProps(${Component.displayName ||
    Component.name}`;

  return WrappedComponent;
};

export default withProps;
