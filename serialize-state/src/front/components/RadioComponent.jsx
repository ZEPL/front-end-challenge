import React, { Component, PropTypes } from 'react';
import Uuid from '../services/Uuid';
import './RadioComponent.scss';

class RadioComponent extends Component {
  constructor (props) {
    super(props);
    
    this.elemId = Uuid.getUuid()();
    this.state = {
      checked: false
    };
    
    this.nameInTree = this.props.label;
  }
  
  onChange() {
    this.setState({ checked: true });
    this.props.onRadioMonitor(this.elemId);
  }
  
  render() {
    const formName = this.props.name || Uuid.getUuid()();
    const label = this.props.label || '';
    const isChildrenDisabled = !this.state.checked;
    
    const children = React.Children.map(this.props.children, (element) => {
      return React.cloneElement(element, { disabled: isChildrenDisabled, parentNameInTree: this.nameInTree });
    });
    
    return (
      <div className="ss-radio">
        <label htmlFor={this.elemId}>
          <input id={this.elemId} type="radio" name={formName} onChange={this.onChange.bind(this)} />
          {label}
        </label>
        <div className="ss-radio-child-container">
          {children}
        </div>
      </div>
    );
  }
}

RadioComponent.PropTypes = {
  name: PropTypes.string
};

export default RadioComponent;
