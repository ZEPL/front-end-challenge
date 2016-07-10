import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import router from 'app/router';
import store from 'app/store';

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root')
);
