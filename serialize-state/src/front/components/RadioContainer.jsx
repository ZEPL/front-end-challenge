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
      .forEach(element => {
        element.setState({ checked: false, node: { checked: false } });
        element.props.onTreeUpdate(element.nameInTree, element.state.node)
      });
  }
  
  render() {
    return (
      <div className="ss-radio-container">
        <RadioComponent name="radio" label="radio1" parentNameInTree="" onRadioMonitor={this.onRadioMonitor.bind(this)}
                        onTreeUpdate={this.props.onTreeUpdate.bind(this)} ref={(node) => { this.radios.push(node); }}>
          <CheckboxComponent label="checkbox1" name="checkbox1" onTreeUpdate={this.props.onTreeUpdate.bind(this)} />
          <CheckboxComponent label="checkbox2" name="checkbox2" onTreeUpdate={this.props.onTreeUpdate.bind(this)} />
        </RadioComponent>
        
        <RadioComponent name="radio" label="radio2" parentNameInTree="" onRadioMonitor={this.onRadioMonitor.bind(this)} 
                        onTreeUpdate={this.props.onTreeUpdate.bind(this)} ref={(node) => { this.radios.push(node); }}>
          <CheckboxComponent label="checkbox3" name="checkbox3" onTreeUpdate={this.props.onTreeUpdate.bind(this)} />
          <CheckboxComponent label="checkbox4" name="checkbox4" onTreeUpdate={this.props.onTreeUpdate.bind(this)} />
          <CheckboxComponent label="checkbox5" name="checkbox5" onTreeUpdate={this.props.onTreeUpdate.bind(this)} />
        </RadioComponent>
      </div>
    );
  }
}

export default RadioContainer;
