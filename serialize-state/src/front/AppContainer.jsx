import React from 'react';
import { render } from 'react-dom';

import App from './App';

import './app.scss';
import './resources/font/NotoSansKR-Hestia/stylesheets/NotoSansKR-Hestia.css';

function AppContainer() {
  return (
    <div>
      <App message="Hello World!" />
    </div>
  );
}

render(<AppContainer />, document.getElementById('app'));

