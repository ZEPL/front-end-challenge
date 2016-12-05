import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/AppReducer';
import RadioContainer from './components/RadioContainer';
import ControlContainer from './components/ControlContainer';

const store = createStore(reducers);
const structure = {};

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tree: {}
    }
  }
  
  render() {
    return (
      <Provider store={store}>
        <div>
          <ControlContainer />
          <RadioContainer structure={structure} />
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  message: PropTypes.string,
};

export default App;
