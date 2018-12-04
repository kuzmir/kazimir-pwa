import * as React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import LocaleContext from './utils/locale/LocaleContext';

ReactDOM.render(
  <LocaleContext>
    <AppContainer />
  </LocaleContext>,
  document.querySelector('.js-root')
);
