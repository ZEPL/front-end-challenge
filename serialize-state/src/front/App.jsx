import React, { Component, PropTypes } from 'react';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import reducers from './reducers/AppReducer';
import RadioContainer from './components/RadioContainer';
import ControlContainer from './components/ControlContainer';

// const store = createStore(reducers);
const structure = {};

class App extends Component {
  constructor(props) {
    super(props);
    this.tree = {}
  }

  onTreeUpdate(path, value) {
    const splitPath = path.split('.');
    const newTree = Object.assign({}, this.tree);

    function update (tree, depth, splitPath, value) {
      let current = splitPath.shift();

      if (splitPath.length === 0) {
        if (depth === 0) {
          if (Boolean(tree[current])) {
            Object.assign(tree[current], value);
          } else {
            tree[current] = value;
          }
        } else {
          tree.children.push(value);
        }
      } else {
        tree[current] = Boolean(tree[current]) ? tree[current] : {};
        tree[current].children = Boolean(tree[current].children) ? tree[current].children : [];

        update(tree[current], depth + 1, splitPath, value);
      }
    }

    update(newTree, 0, splitPath, value);
    this.tree = newTree;
  }
  
  render() {
    return (
      <div>
        <ControlContainer tree={this.tree} />
        <RadioContainer onTreeUpdate={this.onTreeUpdate.bind(this)} />
      </div>
      // <Provider store={store}>
      // </Provider>
    );
  }
}

App.propTypes = {
  message: PropTypes.string,
};

export default App;
