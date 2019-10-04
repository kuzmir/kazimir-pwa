// @flow

import * as React from 'react';
import {LocaleContextConsumer} from './LocaleContext';

export const withLocale = () => <ReceivedProps: {}>(
  Wrapped: React.ComponentType<ReceivedProps>
): React.ComponentType<ReceivedProps> => {
  const WrappedComponent = (wrappedComponentProps: ReceivedProps) => (
    <LocaleContextConsumer>
      {props => <Wrapped {...wrappedComponentProps} {...props} />}
    </LocaleContextConsumer>
  );

  const displayName = Wrapped.displayName || Wrapped.name || 'ReactComponent';

  WrappedComponent.displayName = `withLocale(${displayName}`;

  return WrappedComponent;
};
