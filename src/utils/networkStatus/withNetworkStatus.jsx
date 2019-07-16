// @flow
import * as React from 'react';
import {NetworkStatusContextConsumer} from './NetworkStatusContext';

export const withNetworkStatus = () => <ReceivedProps: {}>(
  Wrapped: React.ComponentType<ReceivedProps>
): React.ComponentType<ReceivedProps> => {
  const WrappedComponent = (wrappedComponentProps: ReceivedProps) => (
    <NetworkStatusContextConsumer>
      {({online}) => (
        <Wrapped
          {...wrappedComponentProps}
          online={online}
        />
      )}
    </NetworkStatusContextConsumer>
  );
  const displayName = Wrapped.displayName || Wrapped.name || 'ReactComponent';

  WrappedComponent.displayName = `withNetworkStatus(${displayName}`;

  return WrappedComponent;
};
