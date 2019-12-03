// @flow strict

import routes from './routes';
import type {LocaleType} from '../locale/localization';

function getRoute(id: string, locale: LocaleType) {
  return routes[locale][id];
}

function generateRoute(id, params: Object | null, locale: LocaleType) {
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

export function getRouteFromLocation(locationPath: string, locale: LocaleType) {
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

function pickLocale(locale: LocaleType, overrideLocale?: LocaleType) {
  return overrideLocale ? overrideLocale : locale;
}

function getRouter(locale: LocaleType) {
  return {
    getRoute: (id: string, overrideLocale?: LocaleType) =>
      getRoute(id, pickLocale(locale, overrideLocale)),
    generateRoute: (
      id: string,
      params: Object | null,
      overrideLocale?: LocaleType
    ) => generateRoute(id, params, pickLocale(locale, overrideLocale)),
  };
}

export default getRouter;
