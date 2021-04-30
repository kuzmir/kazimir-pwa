// @flow strict

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import I18n from './utils/locale/I18n';
import AppContainer from './AppContainer';

import {initServiceWorker} from './utils/pwaUtils';

initServiceWorker();

const root = document.querySelector('.js-root');

if (root) {
  ReactDOM.render(
    <Router basename="/">
      <I18n>
        <AppContainer />
      </I18n>
    </Router>,
    root
  );  
}
