// @flow

import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StreetList from './components/list/StreetList';
import StreetDetail from './components/list/StreetDetail';
import {withNetworkStatus} from './utils/networkStatus/withNetworkStatus';
import {withLocale} from './utils/locale/withLocale';
import MapContainer from './components/map/MapContainer';
import Navigation from './components/layout/Navigation';
import './components/layout/layout.css';

import type {LocalePropsType} from './utils/locale/LocaleContext';

const DATA_URL = '/streets.json';

type PropsType = {} & LocalePropsType;

// TODO update flow types
type StateType = {
  data: Array<Object>
};

class AppContainer extends React.Component<PropsType, StateType> {
  constructor(props) {
    super(props);

    props.initServiceWorker();
  }

  state = {
    data: []
  };

  componentDidMount() {
    fetch(DATA_URL)
      .then(response => response.json())
      .then(transformedData => {
        this.setState(() => ({
          data: transformedData
        }));
      });
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

  render() {
    const {data} = this.state;

    return (
      <>
        {!data.length ? (
          <div>loading here</div>
        ) : (
          <>
            <Router>
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

export default withNetworkStatus()(withLocale()(AppContainer));
