import React, { Component } from 'react';
import RadioComponent from './RadioComponent';
import CheckboxComponent from './CheckBoxComponent';

class RadioContainer extends Component {
  render() {
    return (
      <div className="ss-radio-container">
        <RadioComponent name="radio" label="radio1">
          <CheckboxComponent label="checkbox1"/>
          <CheckboxComponent label="checkbox2"/>
        </RadioComponent>
        
        <RadioComponent name="radio" label="radio2">
          <CheckboxComponent label="checkbox3"/>
          <CheckboxComponent label="checkbox4"/>
          <CheckboxComponent label="checkbox5"/>
        </RadioComponent>
      </div>
    );
  }
}

export default RadioContainer;
