// @flow strict

import {getUserLocale} from './localeUtils';
import locales from './locales';

export type LocaleType = 'en' | 'pl';
export type L20nKeyType = string;

function translate(
  key: L20nKeyType,
  locale: LocaleType = getUserLocale()
): string {
  return locales[locale][key];
}

export default translate;
