import * as React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import LocaleContext from './utils/locale/LocaleContext';

import {initServiceWorker} from './utils/pwaUtils';

ReactDOM.render(
  <LocaleContext>
    <AppContainer initServiceWorker={initServiceWorker} />
  </LocaleContext>,
  document.querySelector('.js-root')
);
