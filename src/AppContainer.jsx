// @flow

import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StreetList from './components/list/StreetList';
import StreetDetail from './components/list/StreetDetail';
import {withNetworkStatus} from './utils/networkStatus/withNetworkStatus';
import {withLocale} from './utils/locale/withLocale';
import Layout from './components/layout/Layout';
import type {LocalePropsType} from './utils/locale/LocaleController';

const DATA_URL = 'https://kazimir.app/streets.json';

type PropsType = {} & LocalePropsType;

// TODO update flow types
type StateType = {
  data: Array<Object>
};

class AppContainer extends React.Component<PropsType, StateType> {
  constructor(props) {
    super(props);

    // props.initServiceWorker();
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
    <Layout>
      <div>we display map here</div>
      <StreetList data={this.state.data} {...props} />
    </Layout>
  );

  renderStreetList = props => (
    <Layout>
      <StreetList data={this.state.data} {...props} />
    </Layout>
  );

  renderDetail = () => (
    <Layout>
      <StreetDetail data={this.state.data} />
    </Layout>
  );

  render() {
    const {data} = this.state;

    return (
      <div>
        <h3>network status: {this.props.online ? 'online' : 'offline'}</h3>

        {!data.length ? (
          <div>loading here</div>
        ) : (
          <React.Fragment>
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

            <Router>
              <Switch>
                <Route exact path="/" component={this.renderStreetList} />
                <Route
                  exact
                  path="/map"
                  component={this.renderStreetListWithMap}
                />
                <Route
                  exact
                  path="/street/:id/:timespan"
                  component={this.renderDetail}
                />
              </Switch>
            </Router>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default withNetworkStatus()(withLocale()(AppContainer));
