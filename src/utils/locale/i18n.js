// @flow strict

import {useEffect, useState} from 'react';
// $FlowFixMe https://github.com/ReactTraining/react-router/issues/6944
import {useLocation} from 'react-router-dom';
import {getUserLocale} from './localeUtils';
import translate from './localization';
import type {LocaleType} from './localization';
import getRouter, {getRouteFromLocation} from '../routes/router';

type I18nType = {
  changeLocaleRoute: string,
  getRoute: (id: string) => string,
  generateRoute: (
    id: string,
    params: Object | null,
    overrideLocale?: LocaleType
  ) => string,
  locale: LocaleType,
  translate: (id: string) => string,
};

export default function useI18n(): I18nType {
  const location = useLocation();
  const locale = getUserLocale();
  const {getRoute, generateRoute} = getRouter(locale);

  const [changeLocaleRoute, setChangeLocaleRoute] = useState<string>(
    getRouteFromLocation(location.pathname, locale)
  );

  useEffect(() => {
    const locale = getUserLocale();

    setChangeLocaleRoute(getRouteFromLocation(location.pathname, locale));
  }, [location]);

  return {
    changeLocaleRoute,
    getRoute,
    generateRoute,
    locale,
    translate: (id: string) => translate(id, locale),
  };
}
