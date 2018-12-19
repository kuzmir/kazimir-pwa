export const initServiceWorker = () => {
  if (navigator.serviceWorker) {
    const options = {
      scope: '/'
    };

    navigator.serviceWorker
      .register('serviceWorker.js', options)
      .then(registration => {
        console.info('service worker regitstration success', registration)
      })
      .catch(error => {
        console.error('service worker regitstration error', error)
      });
  }
};
