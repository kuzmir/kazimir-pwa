// @flow strict

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import AppContainer from './AppContainer';

import {initServiceWorker} from './utils/pwaUtils';

initServiceWorker();

const root = document.querySelector('.js-root');

if (root) {
  ReactDOM.render(
    <Router>
      <AppContainer />
    </Router>,
    root
  );  
}
