import React, { Component } from 'react';
import { connect } from 'react-redux';
import StringInput from './StringInput';
import PrimaryButton from './PrimaryButton';
import TreeStorage from '../../services/TreeStorage';
import { treeSetAction } from '../../actions/TreeUpdateAction';

class ControlContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      treeStr: ''
    };
  }
  
  onClickSaveState() {
    TreeStorage.set(TreeStorage.treeToString(this.props.tree));
  }
  
  onClickSetState() {
    const treeStr = this.state.treeStr;

    this.props.dispatchSetState(treeStr);
    this.setState({ treeStr: '' });
  }
  
  onFocusStringInput() {
    const treeStr = TreeStorage.get();
    this.setState({ treeStr: treeStr })
  }
  
  render() {
    return (
      <div>
        <StringInput treeStr={this.state.treeStr} onFocusHandler={this.onFocusStringInput.bind(this)} />
        <PrimaryButton label="set state" onClick={this.onClickSetState.bind(this)}/>
        <PrimaryButton label="save state" onClick={this.onClickSaveState.bind(this)}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetState: function dispatchSetState(treeStr) {
      dispatch(treeSetAction(treeStr)); 
    }
  };
}

export default connect(null, mapDispatchToProps)(ControlContainer);
