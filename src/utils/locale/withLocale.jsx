// @flow
import * as React from 'react';
import LocaleController from './LocaleController';

export const withLocale = () => <Props: {}>(
  Wrapped: React.ComponentType<Props>
): React.ComponentType<Props> => {
  const WrappedComponent = (wrappedComponentProps: Props) => (
    <LocaleController>
      {({locale, setLocale}) => (
        <Wrapped
          {...wrappedComponentProps}
          setLocale={setLocale}
          locale={locale}
        />
      )}
    </LocaleController>
  );

  WrappedComponent.displayName = `withLocale(${Wrapped.displayName ||
    Wrapped.name}`;

  return WrappedComponent;
};
