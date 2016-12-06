import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TreeContainer from './components/tree/TreeContainer';
import ControlContainer from './components/control/ControlContainer';
import BooleanElement from './model/BooleanElement';
import { treeInitAction } from './actions/TreeUpdateAction';

class App extends Component {
  constructor(props) {
    super(props);

    this.tree = [
      new BooleanElement('radio', 'radio', 'radio1', false, [
        new BooleanElement('checkbox1', 'checkbox', 'checkbox1', false, null),
        new BooleanElement('checkbox2', 'checkbox', 'checkbox2', false, null),
        new BooleanElement('checkbox3', 'checkbox', 'checkbox3', false, null)
      ]),
      new BooleanElement('radio', 'radio', 'radio2', false, [
        new BooleanElement('checkbox4', 'checkbox', 'checkbox4', false, null),
        new BooleanElement('checkbox5', 'checkbox', 'checkbox5', false, null)
      ])
    ];
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
  
  componentDidMount() {
    this.props.treeInitAction(this.tree);
  }
  
  render() {
    return (
      <div>
        <ControlContainer tree={this.tree} />
        <TreeContainer tree={this.tree} />
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    treeInitAction: function (tree) {
      dispatch(treeInitAction(tree));
    }
  };
}

export default connect(null, mapDispatchToProps)(App);
