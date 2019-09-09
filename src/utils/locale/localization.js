// @flow strict

import {getUserLocale} from './localeUtils';
import locales from './locales';

function t(key, locale = getUserLocale()) {
  return locales[locale][key];
}

export default t;
