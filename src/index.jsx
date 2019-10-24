// @flow strict

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import AppContainer from './AppContainer';

import {initServiceWorker} from './utils/pwaUtils';

initServiceWorker();

ReactDOM.render(
  <Router>
    <AppContainer />
  </Router>,
  document.querySelector('.js-root')
);
