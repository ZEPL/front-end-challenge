import React, { Component } from 'react';
import StringInput from './StringInput';
import PrimaryButton from './PrimaryButton';

class ControlContainer extends Component {
  render() {
    console.log(this.props.tree);
    
    return (
      <div>
        <StringInput tree={this.props.tree} />
        <PrimaryButton label="set state"/>
        <PrimaryButton label="save state"/>
      </div>
    );
  }
} 

export default ControlContainer;
