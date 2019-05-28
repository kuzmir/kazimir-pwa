// @flow

import * as React from 'react';
import {getDefaultBrowserLocale} from './localeUtils';

const {Provider, Consumer} = React.createContext();

// export type LocalePropsType = {};

// locale: string,
// setLocale: string => void

export type LocalePropsType = {
  children: React.Node
};

// todo: locale as a const ($Values etc)
type LocaleStateType = {
  locale: string
};

export const LocaleContextConsumer = Consumer;
export class LocaleContextProvider extends React.Component<
  LocalePropsType,
  LocaleStateType
> {
  state: LocaleStateType = {
    locale: getDefaultBrowserLocale()
  };

  handleSetLocale = (locale: string) => this.setState(() => ({locale}));

  render() {
    return (
      <Provider
        value={{
          locale: this.state.locale,
          setLocale: this.handleSetLocale
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default LocaleContextProvider;
