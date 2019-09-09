// @flow strict

export const getURLLocale = () => {
  const assumedUrlLocale = location.pathname.split('/').filter(Boolean)[0];

  if (['en', 'pl'].includes(assumedUrlLocale)) {
    return assumedUrlLocale;
  }

  return 'en';
};

export const getUserLocale = getURLLocale;
