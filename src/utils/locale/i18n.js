// @flow strict

import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {getUserLocale} from './localeUtils';
import translate, {type LocaleType} from './localization';
import getRouter from '../routes/router';

export default function usei18n() {
  const [locale, setLocale] = useState(getUserLocale());
  // const location = useLocation();
  const {getRoute, generateRoute} = getRouter(locale);

  return {
    locale,
    changeLocale: (locale: LocaleType) => setLocale(locale),
    translate: (id: string) => translate(id, locale),
    getRoute,
    generateRoute
  }
}
