// @flow strict

import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import StreetList from './components/list/StreetList';
import StreetDetail from './components/list/StreetDetail';
import MapContainer from './components/map/MapContainer';
import Navigation from './components/navigation/Navigation';
import NavigationDesktop from './components/navigation/NavigationDesktop';
import Team from './components/pages/Team';
import Info from './components/pages/Info';
import Press from './components/pages/Press';
import NotFound from './components/pages/NotFound';
import './components/navigation/main.css';
import style from './components/list/list.css';
import dataEN from './streets_en.json';
import dataPL from './streets_pl.json';
import rafThrottler from './utils/rafThrottler';
import useI18n from './utils/locale/i18n';
import {getUserLocale} from './utils/locale/localeUtils';


const BREAKPOINT = 1024;
const SCREEN_MOBILE = 'SCREEN_MOBILE';
const SCREEN_DESKTOP = 'SCREEN_DESKTOP';

export type PhotoType = {
  title: string,
  small: string,
  large: string,
};

export type PlaceType = {
  id: number,
  name: string,
  description: string,
  photos: Array<PhotoType>,
};

export type PlacesType = {
  present: Array<PlaceType>,
  past: Array<PlaceType>,
};

export type StreetType = {
  id: number,
  name: string,
  coordinates: Array<[number, number]>,
  places: PlacesType,
};

type StateType = {
  // screenType: typeof SCREEN_MOBILE | typeof SCREEN_DESKTOP,
  data: Array<StreetType>,
};

function widthToScreenType(width: number) {
  if (width <= BREAKPOINT) {
    return SCREEN_MOBILE;
  }

  return SCREEN_DESKTOP;
}

function AppContainer() {
  const {getRoute, locale} = useI18n();
  const [{data}, setState] = useState<StateType>({
    data: locale === 'pl' ? dataPL : dataEN
  });
  const screenType = widthToScreenType(window.innerWidth);
  const isWideLayout = screenType === SCREEN_DESKTOP;

  useEffect(() => {
    setState(state => ({...state, data: locale === 'pl' ? dataPL : dataEN,}))
  }, [locale]);

  const renderStreetListWithMap = props => (
    <>
      <Navigation />
      <MapContainer data={data} {...props} />
      <StreetList mapView data={data} {...props} />
    </>
  );

  const renderStreetList = props => (
    <>
      <Navigation />
      <StreetList data={data} {...props} />
    </>
  );

  const renderDetail = () => <StreetDetail data={data} />;

  const renderDesktopView = props => (
    <>
      <NavigationDesktop />
      <div className={style.desktopViewContainer}>
        <StreetList desktopView data={data} {...props} />
        <MapContainer data={data} {...props} />
      </div>
    </>
  );

  const renderDetailDesktop = props => (
    <>
      <NavigationDesktop />
      <div className={style.desktopViewContainer}>
        <StreetDetail desktopView data={data} />
        <MapContainer data={data} {...props} />
      </div>
    </>
  );

  const renderInfo = () => (
    <>
      <NavigationDesktop />
      <div className={style.desktopViewContainer}>
        <Info locale={locale} />
      </div>
    </>
  );

  const renderTeam = () => (
    <>
      <NavigationDesktop />
      <div className={style.desktopViewContainer}>
        <Team />
      </div>
    </>
  );

  const renderPress = () => (
    <>
      <NavigationDesktop />
      <div className={style.desktopViewContainer}>
        <Press />
      </div>
    </>
  );

  const renderNotFound = () => (
    <>
      <NavigationDesktop />
      <div className={style.desktopViewContainer}>
        <NotFound />
      </div>
    </>
  );

  return (
    <Switch>
      <Route
        exact
        path={getRoute('MAIN')}
        component={
          isWideLayout ? renderDesktopView : renderStreetList
        }
      />
      <Route
        exact
        path={getRoute('MAP')}
        component={
          isWideLayout
            ? renderDesktopView
            : renderStreetListWithMap
        }
      />
      <Route
        exact
        path={getRoute('STREET')}
        component={
          isWideLayout ? renderDetailDesktop : renderDetail
        }
      />
      <Route
        exact
        path={getRoute('TEAM')}
        component={renderTeam}
      />
      <Route
        exact
        path={getRoute('INFO')}
        component={renderInfo}
      />
      <Route
        exact
        path={getRoute('PRESS')}
        component={renderPress}
      />
      <Route component={renderNotFound} />
    </Switch>
  );
}

export default AppContainer;
