// @flow strict

import React, {createContext, useContext, useState} from 'react';
import type {Node} from 'react';
import {getUserLocale} from './localeUtils';
import translate from './localization';
import type {LocaleType} from './localization';
import getRouter from '../routes/router';

export type I18nType = {
  getRoute: (id: string, overrideLocale?: LocaleType) => string,
  generateRoute: (
    id: string,
    params: Object | null,
    overrideLocale?: LocaleType
  ) => string,
  locale: LocaleType,
  translate: (id: string) => string,
  changeLocale: (locale: LocaleType) => mixed,
};

export const LocalizationContext = createContext<I18nType>({});

export function I18n({children}: {children: Node}) {
  const [locale, setLocale] = useState<LocaleType>(getUserLocale());
  const {getRoute, generateRoute} = getRouter(locale);

  // this is a hoax unfortunately, using any hook related to router
  // causes to unmount street detail component breaking the animation :(
  const urlLocale = getUserLocale();

  if (locale !== urlLocale) {
    setLocale(urlLocale);
  }

  return (
    <LocalizationContext.Provider
      value={{
        getRoute,
        generateRoute,
        locale,
        changeLocale: locale => setLocale(locale),
        translate: (id: string) => translate(id, locale),
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
}

export const useI18n = () => useContext(LocalizationContext);
export default I18n;
