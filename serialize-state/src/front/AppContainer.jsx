import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/AppReducer';
import App from './App';
import './App.scss';
import './resources/font/NotoSansKR-Hestia/stylesheets/NotoSansKR-Hestia.css';

const store = createStore(reducers);

function AppContainer() {
  return (
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
}

render(<AppContainer />, window.document.getElementById('react-app'));

