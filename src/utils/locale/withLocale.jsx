// @flow
import * as React from 'react';
import {LocaleContextConsumer} from './LocaleContext';

export const withLocale = () => <ReceivedProps: {}>(
  Wrapped: React.ComponentType<ReceivedProps>
): React.ComponentType<ReceivedProps> => {
  const WrappedComponent = (wrappedComponentProps: ReceivedProps) => (
    <LocaleContextConsumer>
      {({locale, setLocale}) => (
        <Wrapped
          {...wrappedComponentProps}
          setLocale={setLocale}
          locale={locale}
        />
      )}
    </LocaleContextConsumer>
  );

  const displayName = Wrapped.displayName || Wrapped.name || 'ReactComponent';

  WrappedComponent.displayName = `withLocale(${displayName}`;

  return WrappedComponent;
};
