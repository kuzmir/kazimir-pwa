// @flow

import * as React from 'react';
import {getUserLocale} from './localeUtils';

const {Provider, Consumer} = React.createContext<LocaleContextType>({});

export type LocaleContextType = {
  locale: string,
  setLocale: string => mixed
};
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
  state = {
    locale: getUserLocale()
  };

  handleSetLocale = (locale: string) => this.setState(() => ({locale}));

  render() {

    return (
      <Provider value={{
        locale: this.state.locale,
        setLocale: this.handleSetLocale
      }}>
        {this.props.children}
      </Provider>
    );
  }
}

export default LocaleContextProvider;
