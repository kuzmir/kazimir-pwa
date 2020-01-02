// @flow strict

import React, {useState, useEffect, useRef} from 'react';
import type {Node} from 'react';
import {Route, Switch} from 'react-router-dom';
import cx from 'classnames';
import StreetList from './components/list/StreetList';
import StreetDetail from './components/list/StreetDetail';
import MapContainer from './components/map/MapContainer';
import Navigation from './components/navigation/Navigation';
import Team from './components/pages/Team';
import Info from './components/pages/Info';
import Press from './components/pages/Press';
import NotFound from './components/pages/NotFound';
import './components/navigation/main.css';
import style from './layout.css';
import dataEN from './streets_en.json';
import dataPL from './streets_pl.json';
import {useI18n} from './utils/locale/I18n';

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
    data: locale === 'pl' ? dataPL : dataEN,
  });
  const screenType = widthToScreenType(window.innerWidth);
  const isWideLayout = screenType === SCREEN_DESKTOP;

  useEffect(() => {
    setState(state => ({...state, data: locale === 'pl' ? dataPL : dataEN}));
  }, [locale]);

  const renderLayout = (children: Node, withBackground: boolean = false) => (
    <>
      <Navigation data={data} />
      <div className={cx(style.container, {
        [style.containerWithBackground]: withBackground
      })}>
        {children}
      </div>
    </>
  );

  // todo: pass selected item to props, this should prevent rendering whole component tree
  const renderMain = () => (
    renderLayout(
      <>
        <StreetList data={data} className={style.box} />
        <MapContainer data={data} className={cx(style.box, style.boxFixed, style.hiddenOnMobile)} />
      </>
    )
  );

  const renderMainWithMap = () => (
    renderLayout(
      <>
        <StreetList data={data} className={style.box} mapView />
        <MapContainer data={data} className={cx(style.box, style.boxFixed)} mapView />
      </>
    )
  );

  const renderDetail = () => (
    renderLayout(
      <>
        <StreetDetail data={data} className={cx(style.box)} />
        <MapContainer data={data} className={cx(style.box, style.boxFixed, style.hiddenOnMobile)} />
      </>
    )
  );

  const renderInfo = () => renderLayout(<Info />, true);
  const renderTeam = () => renderLayout(<Team />, true);
  const renderPress = () => renderLayout(<Press />, true);
  const renderNotFound = () => renderLayout(<NotFound />, true);

  return (
    <>
      <Switch>
        <Route
          exact
          path={getRoute('MAIN')}
          component={renderMain}
        />
        <Route
          exact
          path={getRoute('MAP')}
          component={renderMainWithMap}
        />
        <Route
          exact
          path={getRoute('STREET')}
          component={renderDetail}
        />
        <Route exact path={getRoute('TEAM')} component={renderTeam} />
        <Route exact path={getRoute('INFO')} component={renderInfo} />
        <Route exact path={getRoute('PRESS')} component={renderPress} />
        <Route component={renderNotFound} />
      </Switch>
    </>
  );
}

export default AppContainer;
