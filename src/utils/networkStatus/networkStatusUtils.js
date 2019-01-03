// @flow

export const isOnline = () => window.navigator.onLine;

export const onNetworkStatusChange = (callback: Function): void => {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
};

export const offNetworkStatusChange = (callback: Function): void => {
  window.removeEventListener('online', callback);
  window.removeEventListener('offline', callback);
};
