// @flow
import * as React from 'react';
import {NetworkStatusContextConsumer} from './NetworkStatusContext';

export const withNetworkStatus = () => <Props: {}>(
  Wrapped: React.ComponentType<Props>
): React.ComponentType<Props> => {
  const WrappedComponent = (wrappedComponentProps: Props) => (
    <NetworkStatusContextConsumer>
      {({online}) => (
        <Wrapped
          {...wrappedComponentProps}
          online={online}
        />
      )}
    </NetworkStatusContextConsumer>
  );

  WrappedComponent.displayName = `withNetworkStatus(${Wrapped.displayName ||
    Wrapped.name}`;

  return WrappedComponent;
};
