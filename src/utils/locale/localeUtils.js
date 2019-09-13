// @flow strict

export const getURLLocale = (): 'en' | 'pl' => {
  const assumedUrlLocale = location.pathname.split('/').filter(Boolean)[0];

  if (assumedUrlLocale === 'pl' || assumedUrlLocale === 'en') {
    return assumedUrlLocale;
  }

  return 'en';
};

export const getUserLocale = getURLLocale;
