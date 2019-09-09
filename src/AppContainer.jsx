// @flow

import * as React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import StreetList from './components/list/StreetList';
import StreetDetail from './components/list/StreetDetail';
import {withNetworkStatus} from './utils/networkStatus/withNetworkStatus';
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
import data from './streets.json';
import rafThrottler from './utils/rafThrottler';

import getRouter from './utils/routes/router';

const BREAKPOINT = 1024;
const SCREEN_MOBILE = 'SCREEN_MOBILE';
const SCREEN_DESKTOP = 'SCREEN_DESKTOP';

type PropsType = {
  initServiceWorker: () => mixed,
  locale: string,
  setLocale: string => mixed,
  online: boolean,
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
    data,
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

  renderInfo = props => (
    <>
      <NavigationDesktop />
      <div className={style.desktopViewContainer}>
        <Info />
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
    const screenType = widthToScreenType(this.state.width);
    const isWideLayout = screenType === SCREEN_DESKTOP;
    const {getRoute, generateRoute} = getRouter(this.props.locale);
    console.error('PAGE LOCALE', this.props.locale)
    console.log(
      getRoute('MAIN'),
      getRoute('MAP'),
      generateRoute('MAP', {name: 'miodowa', timespan: 'obecnie'}),
      getRoute('STREET'),
      generateRoute('STREET', {name: 'szczypiorek', timespan: 'hola to nie działa'})
    )

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
              <Route exact path="/team" component={this.renderTeam} />
              <Route exact path="/info" component={this.renderInfo} />
              <Route exact path="/press" component={this.renderPress} />
              <Route component={this.renderNotFound} />
            </Switch>
          </Router>
        )}
        <h3>network status: {this.props.online ? 'online' : 'offline'}</h3>
        <div>current locale {this.props.locale}</div>
        <div>
          <button
            onClick={() =>
              this.props.setLocale(this.props.locale === 'pl' ? 'en' : 'pl')
            }
          >
            change to {this.props.locale === 'pl' ? 'en' : 'pl'}
          </button>
        </div>
      </>
    );
  }
}

export default withNetworkStatus()<PropsType>(
  withLocale()<PropsType>(AppContainer)
);
