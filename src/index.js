import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import App from 'compo/App';
import store from './store';

import './main.scss';

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>, document.getElementById('app'));
