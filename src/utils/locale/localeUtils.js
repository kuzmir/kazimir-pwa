// @flow strict

export const getUserLocale = (): 'en' | 'pl' => {
  const assumedUrlLocale = window.location.pathname.split('/').filter(Boolean)[0];

  if (assumedUrlLocale === 'pl' || assumedUrlLocale === 'en') {
    return assumedUrlLocale;
  }

  return 'en';
};
