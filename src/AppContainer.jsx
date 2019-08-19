// @flow

import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StreetList from './components/list/StreetList';
import StreetDetail from './components/list/StreetDetail';
import {withNetworkStatus} from './utils/networkStatus/withNetworkStatus';
import {withLocale} from './utils/locale/withLocale';
import MapContainer from './components/map/MapContainer';
import Navigation from './components/navigation/Navigation';
import NavigationDesktop from './components/navigation/NavigationDesktop';
import './components/navigation/main.css';
import style from './components/list/list.css';
import data from './streets.json';
import rafThrottler from './utils/rafThrottler';

// const DATA_URL = '/streets.json';
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
    // fetch(DATA_URL)
    //   .then(response => response.json())
    //   .then(transformedData => {
    //     this.setState(() => ({
    //       data: transformedData,
    //     }));
    //   });

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

  render() {
    const {data} = this.state;
    const screenType = widthToScreenType(this.state.width);

    return (
      <>
        {!data.length ? (
          <div>loading here</div>
        ) : (
          <>
            <Router>
              {screenType === SCREEN_DESKTOP ? (
                <Switch>
                  <Route exact path="/" component={this.renderDesktopView} />
                  <Route
                    exact
                    path="/map/:id"
                    component={this.renderDesktopView}
                  />
                  <Route
                    exact
                    path="/street/:id/:timespan"
                    component={this.renderDetailDesktop}
                  />
                </Switch>
              ) : (
                <Switch>
                  <Route exact path="/" component={this.renderStreetList} />
                  <Route
                    exact
                    path="/map/:id"
                    component={this.renderStreetListWithMap}
                  />
                  <Route
                    exact
                    path="/street/:id/:timespan"
                    component={this.renderDetail}
                  />
                </Switch>
              )}
            </Router>
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
        )}
      </>
    );
  }
}

export default withNetworkStatus()<PropsType>(
  withLocale()<PropsType>(AppContainer)
);
