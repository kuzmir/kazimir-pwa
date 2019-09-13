// @flow strict

import routes from './routes';

function getRoute(id: string, locale: 'en' | 'pl') {
  return routes[locale][id];
}

function generateRoute(id, params: Object | null, locale: 'en' | 'pl') {
  const route = getRoute(id, locale);

  if (params) {
    return route
      .split('/')
      .map(part => {
        const routeWithParamReplaced = params[part.slice(1)];

        return routeWithParamReplaced || part;
      })
      .join('/');
  }

  return route;
}

function getRouter(locale: 'en' | 'pl') {
  return {
    getRoute: (id: string) => getRoute(id, locale),
    generateRoute: (id: string, params: Object | null) =>
      generateRoute(id, params, locale),
  };
}

export default getRouter;
