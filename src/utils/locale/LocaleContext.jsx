// @flow

import * as React from 'react';
import {getUserLocale} from './localeUtils';
import getRouter from '../routes/router';
import translate from './localization';

const {Provider, Consumer} = React.createContext<LocaleContextType>({});

export type LocaleContextType = {
  locale: 'en' | 'pl',
  changeLocale: () => mixed,
  getRoute: string => string,
  generateRoute: (string, Object | null) => string,
};
export type LocalePropsType = {
  children: React.Node
};

// todo: locale as a const ($Values etc)
type LocaleStateType = {
  locale: 'en' | 'pl'
};

export const LocaleContextConsumer = Consumer;
export class LocaleContextProvider extends React.Component<
  LocalePropsType,
  LocaleStateType
> {
  state = {
    locale: getUserLocale()
  };

  handleChangeLocale = () =>
      this.setState(({locale}) => ({
        locale: locale === 'pl' ? 'en' : 'pl'
      }));

  render() {
    const {locale} = this.state;
    const {getRoute, generateRoute} = getRouter(locale);

    return (
      <Provider value={{
        locale: locale,
        changeLocale: this.handleChangeLocale,
        getRoute,
        generateRoute,
        translate: (id: string) => translate(id, locale),
      }}>
        {this.props.children}
      </Provider>
    );
  }
}

export default LocaleContextProvider;
