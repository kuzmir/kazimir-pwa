// @flow

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import StreetList from './components/list/StreetList';
import StreetDetail from './components/list/StreetDetail';
import {withLocale} from './utils/locale/withLocale';
import MapContainer from './components/map/MapContainer';
import Navigation from './components/navigation/Navigation';
import NavigationDesktop from './components/navigation/NavigationDesktop';
import Team from './components/pages/Team';
import Info from './components/pages/Info';
import Press from './components/pages/Press';
import NotFound from './components/pages/NotFound';
import './components/navigation/main.css';
import style from './components/list/list.css';
import data from './streets_en.json';
import dataPl from './streets_pl.json';
import rafThrottler from './utils/rafThrottler';

const BREAKPOINT = 1024;
const SCREEN_MOBILE = 'SCREEN_MOBILE';
const SCREEN_DESKTOP = 'SCREEN_DESKTOP';

type PropsType = {
  initServiceWorker: () => mixed,
  locale: string,
  changeLocale: () => mixed,
  getRoute: string => string,
  generateRoute: (string, Object | null) => string,
};

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
  width: number,
  data: Array<StreetType>,
};

function widthToScreenType(width: number) {
  if (width <= BREAKPOINT) {
    return SCREEN_MOBILE;
  }

  return SCREEN_DESKTOP;
}

class AppContainer extends React.Component<PropsType, StateType> {
  constructor(props) {
    super(props);

    props.initServiceWorker();
  }

  state = {
    data: this.props.locale === 'pl' ? dataPl : data,
    locale: this.props.locale,
    width: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener(
      'resize',
      rafThrottler(() => this.setState({width: window.innerWidth}))
    );
  }

  renderStreetListWithMap = props => (
    <>
      <Navigation />
      <MapContainer data={this.state.data} {...props} />
      <StreetList mapView data={this.state.data} {...props} />
    </>
  );

  renderStreetList = props => (
    <>
      <Navigation />
      <StreetList data={this.state.data} {...props} />
    </>
  );

  renderDetail = () => <StreetDetail data={this.state.data} />;

  renderDesktopView = props => (
    <>
      <NavigationDesktop />
      <div className={style.desktopViewContainer}>
        <StreetList desktopView data={this.state.data} {...props} />
        <MapContainer data={this.state.data} {...props} />
      </div>
    </>
  );

  renderDetailDesktop = props => (
    <>
      <NavigationDesktop />
      <div className={style.desktopViewContainer}>
        <StreetDetail desktopView data={this.state.data} />
        <MapContainer data={this.state.data} {...props} />
      </div>
    </>
  );

  renderInfo = () => (
    <>
      <NavigationDesktop />
      <div className={style.desktopViewContainer}>
        <Info locale={this.state.locale} />
      </div>
    </>
  );

  renderTeam = props => (
    <>
      <NavigationDesktop />
      <div className={style.desktopViewContainer}>
        <Team />
      </div>
    </>
  );

  renderPress = props => (
    <>
      <NavigationDesktop />
      <div className={style.desktopViewContainer}>
        <Press />
      </div>
    </>
  );

  renderNotFound = props => (
    <>
      <NavigationDesktop />
      <div className={style.desktopViewContainer}>
        <NotFound />
      </div>
    </>
  );

  render() {
    const {data} = this.state;
    const {getRoute} = this.props;
    const screenType = widthToScreenType(this.state.width);
    const isWideLayout = screenType === SCREEN_DESKTOP;

    return (
      <>
        {!data.length ? (
          <div>loading here</div>
        ) : (
          <Router>
            <Switch>
              <Route
                exact
                path={getRoute('MAIN')}
                component={
                  isWideLayout ? this.renderDesktopView : this.renderStreetList
                }
              />
              <Route
                exact
                path={getRoute('MAP')}
                component={
                  isWideLayout
                    ? this.renderDesktopView
                    : this.renderStreetListWithMap
                }
              />
              <Route
                exact
                path={getRoute('STREET')}
                component={
                  isWideLayout ? this.renderDetailDesktop : this.renderDetail
                }
              />
              <Route
                exact
                path={getRoute('TEAM')}
                component={this.renderTeam}
              />
              <Route
                exact
                path={getRoute('INFO')}
                component={this.renderInfo}
              />
              <Route
                exact
                path={getRoute('PRESS')}
                component={this.renderPress}
              />
              <Route component={this.renderNotFound} />
            </Switch>
          </Router>
        )}
      </>
    );
  }
}

export default withLocale()<PropsType>(AppContainer);
