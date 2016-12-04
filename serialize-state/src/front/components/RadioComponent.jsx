import React, { Component, PropTypes } from 'react';
import Uuid from '../services/Uuid';
import './RadioComponent.scss';

class RadioComponent extends Component {
  render() {
    const formName = this.props.name || Uuid.getUuid()();
    const label = this.props.label || '';
    
    return (
      <div className="ss-radio">
        <label>
          <input type="radio" name={formName} />
          {label}
        </label>
        <div className="ss-radio-child-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

RadioComponent.PropTypes = {
  name: PropTypes.string
};

export default RadioComponent;
