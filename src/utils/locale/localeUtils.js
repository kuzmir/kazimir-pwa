// @flow strict

import type {LocaleType} from './localization';

export const getUserLocale = (): LocaleType => {
  const assumedUrlLocale = window.location.pathname
    .split('/')
    .filter(Boolean)[0];

  if (assumedUrlLocale === 'pl' || assumedUrlLocale === 'en') {
    return assumedUrlLocale;
  }

  return 'en';
};
