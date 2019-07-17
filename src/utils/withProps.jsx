import * as React from 'react';

const withProps = <ReceivedPropsType, ReturnedPropsType>(
  callback: (ReceivedPropsType) => ReturnedPropsType,
  Component: React.ComponentType<ReturnedPropsType>
): React.ComponentType<ReceivedPropsType> => {
  const WrappedComponent = (currentProps: ReceivedPropsType) => (
    <Component {...callback(currentProps)} />
  );
  const displayName = Component.displayName || Component.name || 'ReactComponent';

  WrappedComponent.displayName = `withProps(${displayName}`;

  return WrappedComponent;
};

export default withProps;
