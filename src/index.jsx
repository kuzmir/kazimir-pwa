import * as React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import NetworkStatusContext from './utils/networkStatus/NetworkStatusContext';
import LocaleContext from './utils/locale/LocaleContext';

import {initServiceWorker} from './utils/pwaUtils';

ReactDOM.render(
  <NetworkStatusContext>
    <LocaleContext>
      <AppContainer initServiceWorker={initServiceWorker} />
    </LocaleContext>
  </NetworkStatusContext>,
  document.querySelector('.js-root')
);
