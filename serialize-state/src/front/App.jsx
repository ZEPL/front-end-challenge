import React, { PropTypes } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/AppReducer';
import RadioContainer from './components/RadioContainer';
import ControlContainer from './components/ControlContainer';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div>
        <ControlContainer />
        <RadioContainer />
      </div>
    </Provider>
  );
}

App.propTypes = {
  message: PropTypes.string,
};

export default App;
