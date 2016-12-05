import React from 'react';
import { render } from 'react-dom';

import App from './App';

import './App.scss';
import './resources/font/NotoSansKR-Hestia/stylesheets/NotoSansKR-Hestia.css';

function AppContainer() {
  return (
    <div>
      <App />
    </div>
  );
}

render(<AppContainer />, window.document.getElementById('react-app'));

