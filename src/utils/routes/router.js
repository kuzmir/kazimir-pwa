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

export function getRouteFromLocation(
  locationPath: string,
  locale: 'en' | 'pl'
) {
  // MP: this is really primitive, and will not work in advanced cases (when there is more routes with similar keys)
  // Todo: investigate alternative options to find route based on location
  switch (locale) {
    case 'pl':
      return `${locationPath.slice(3)}`; // cuts `/pl` from the path
    case 'en':
    default:
      return `/pl${locationPath}`; // adds `/pl` to the path
  }
}

function getRouter(locale: 'en' | 'pl') {
  return {
    getRoute: (id: string) => getRoute(id, locale),
    generateRoute: (
      id: string,
      params: Object | null,
      overrideLocale?: 'en' | 'pl'
    ) => generateRoute(id, params, overrideLocale ? overrideLocale : locale),
  };
}

export default getRouter;
