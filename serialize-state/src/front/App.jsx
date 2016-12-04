import React, { PropTypes } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/AppReducer';

const store = createStore(reducers);

function App({ message }) {
  return (
    <Provider store={store}>
      <div>
        <h1>{message}</h1>
      </div>
    </Provider>
  );
}

App.propTypes = {
  message: PropTypes.string,
};

export default App;
