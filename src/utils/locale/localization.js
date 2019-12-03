// @flow strict

import locales from './locales';

export type LocaleType = 'en' | 'pl';
export type L20nKeyType = string;

function translate(key: L20nKeyType, locale: LocaleType): string {
  return locales[locale][key];
}

export default translate;
