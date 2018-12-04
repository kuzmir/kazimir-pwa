// @flow

import * as React from 'react';
import List from './components/list/List';
import {withLocale} from './utils/locale/withLocale';

import type {LocalePropsType} from './utils/locale/LocaleController';

const DATA_URL = 'https://kazimirapp.pl/streets.json';

type PropsType = {} & LocalePropsType;

// TODO update flow types
type StateType = {
  data: Array<Object>
};

class AppContainer extends React.Component<PropsType, StateType> {
  constructor() {
    super();

    this.initServiceWorker();
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

  initServiceWorker = () => {
    if (navigator.serviceWorker.controller) {
      console.log('[PWA Builder] active service worker found, no need to register')
    } else {
      navigator.serviceWorker.register('serviceWorker.js', {
        scope: './'
      }).then(reg => {
        console.log('Service worker has been registered for scope:'+ reg.scope);
      });
    }
  }

  render() {
    const {data} = this.state;

    return (
      <div>
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
              />
            ))}
          </React.Fragment>
        )}
      </div>
    );
  }
}
export default withLocale()(AppContainer);
