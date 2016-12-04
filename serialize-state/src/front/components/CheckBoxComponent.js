import React, { Component } from 'react';
import Uuid from '../services/Uuid';
import './CheckBoxComponent.scss';

class CheckBoxComponent extends Component {
  render() {
    const id = Uuid.getUuid()();
    const formName = this.props.name || Uuid.getUuid()();
    const label = this.props.label || '';
    
    return (
      <label className="ss-checkbox" htmlFor={id}>
        <input id={id} type="checkbox" name={formName} />
        {label}
      </label>
    );
  }  
}

export default CheckBoxComponent;
