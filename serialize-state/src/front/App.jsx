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
        new BooleanElement('checkbox3', 'checkbox', 'checkbox3', false, null),
      ]),
      new BooleanElement('radio', 'radio', 'radio2', false, [
        new BooleanElement('checkbox4', 'checkbox', 'checkbox4', false, null),
        new BooleanElement('checkbox5', 'checkbox', 'checkbox5', false, null),
      ]),
    ];
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
  treeInitAction: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    treeInitAction: (tree) => { dispatch(treeInitAction(tree)); }, 
  };
}

export default connect(null, mapDispatchToProps)(App);
