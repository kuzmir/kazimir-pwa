// @flow

// todo: confirm this is legit (if navigator.language is okay)
export const getDefaultBrowserLocale = () =>
  navigator.language === 'pl-PL' ? 'pl' : 'en';
