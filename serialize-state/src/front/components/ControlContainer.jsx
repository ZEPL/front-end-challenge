import React, { Component } from 'react';
import StringInput from './StringInput';
import PrimaryButton from './PrimaryButton';

class ControlContainer extends Component {
  render() {
    return (
      <div>
        <StringInput/>
        <PrimaryButton label="set state"/>
        <PrimaryButton label="save state"/>
      </div>
    );
  }
} 

export default ControlContainer;
