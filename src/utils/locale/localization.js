// @flow strict

import {getUserLocale} from './localeUtils';
import locales from './locales';

function translate(key: string, locale: 'en' | 'pl' = getUserLocale()) {
  return locales[locale][key];
}

export default translate;
