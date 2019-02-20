// @flow

import * as React from 'react';
import List from './components/list/List';
import {withNetworkStatus} from './utils/networkStatus/withNetworkStatus';
import {withLocale} from './utils/locale/withLocale';

import type {LocalePropsType} from './utils/locale/LocaleController';

const DATA_URL = './streets_data.json';

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

  handleOpenDetails = () => {
    console.log('here I need to open details');
  };

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
            {data.map(item => (
              <List
                key={item.id}
                name={item.name}
                placesPast={item.places.past}
                placesPresent={item.places.present}
                openDetails={this.handleOpenDetails}
              />
            ))}
          </React.Fragment>
        )}
      </div>
    );
  }
}
export default withNetworkStatus()(withLocale()(AppContainer));
