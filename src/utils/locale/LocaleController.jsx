// @flow

import * as React from 'react';

import {getDefaultBrowserLocale} from './localeUtils';

export type LocalePropsType = {
  locale: string,
  setLocale: string => void
};

type LocaleControllerPropsType = {
  children: LocalePropsType => React.Node
};

// todo: locale as a const ($Values etc)
type LocaleControllerStateType = {
  locale: string
};

// refactor to use context api
class LocaleController extends React.Component<
  LocaleControllerPropsType,
  LocaleControllerStateType
> {
  constructor() {
    super();

    this.state = {
      locale: getDefaultBrowserLocale()
    };
  }

  handleSetLocale = (locale: string) => this.setState(() => ({locale}));

  render() {
    return this.props.children({
      locale: this.state.locale,
      setLocale: this.handleSetLocale
    });
  }
}

export default LocaleController;
