// @flow
import * as React from 'react';
import {LocaleContextConsumer} from './LocaleContext';

export const withLocale = () => <Props: {}>(
  Wrapped: React.ComponentType<Props>
): React.ComponentType<Props> => {
  const WrappedComponent = (wrappedComponentProps: Props) => (
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

  WrappedComponent.displayName = `withLocale(${Wrapped.displayName ||
    Wrapped.name}`;

  return WrappedComponent;
};
