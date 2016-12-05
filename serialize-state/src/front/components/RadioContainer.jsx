import React, { Component } from 'react';
import RadioComponent from './RadioComponent';
import CheckboxComponent from './CheckBoxComponent';

class RadioContainer extends Component {
  constructor(props) {
    super(props);
    
    this.radios = [];
  }
  
  onRadioMonitor(elemId) {
    this.radios
      .filter(element => element.elemId != elemId)
      .forEach(element => element.setState({ checked: false }));
  }
  
  render() {
    return (
      <div className="ss-radio-container">
        <RadioComponent name="radio" label="radio1" structure={this.props.structure}
                        onRadioMonitor={this.onRadioMonitor.bind(this)} ref={(node) => { this.radios.push(node); }}>
          <CheckboxComponent label="checkbox1" name="checkbox1" />
          <CheckboxComponent label="checkbox2" name="checkbox2" />
        </RadioComponent>
        
        <RadioComponent name="radio" label="radio2" structure={this.props.structure}
                        onRadioMonitor={this.onRadioMonitor.bind(this)} ref={(node) => { this.radios.push(node); }}>
          <CheckboxComponent label="checkbox3" name="checkbox3" />
          <CheckboxComponent label="checkbox4" name="checkbox4" />
          <CheckboxComponent label="checkbox5" name="checkbox5" />
        </RadioComponent>
      </div>
    );
  }
}

export default RadioContainer;
