import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import StringInput from './StringInput';
import PrimaryButton from './PrimaryButton';
import TreeStorage from '../../services/TreeStorage';
import { treeSetAction } from '../../actions/TreeUpdateAction';

class ControlContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      treeStr: '',
    };
    
    this.onClickSaveState = this.onClickSaveState.bind(this);
    this.onClickSetState = this.onClickSetState.bind(this);
    this.onFocusStringInput = this.onFocusStringInput.bind(this);
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
    this.setState({ treeStr });
  }
  
  render() {
    return (
      <div>
        <StringInput 
          treeStr={this.state.treeStr} 
          onFocusHandler={this.onFocusStringInput} 
        />
        <PrimaryButton label="set state" onClickHandler={this.onClickSetState} />
        <PrimaryButton label="save state" onClickHandler={this.onClickSaveState} />
      </div>
    );
  }
}

ControlContainer.propTypes = {
  tree: PropTypes.array,
  dispatchSetState: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetState: (treeStr) => { dispatch(treeSetAction(treeStr)); }, 
  };
}

export default connect(null, mapDispatchToProps)(ControlContainer);
