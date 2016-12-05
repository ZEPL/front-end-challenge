import React, { Component } from 'react';
import Uuid from '../services/Uuid';
import './CheckBoxComponent.scss';

class CheckBoxComponent extends Component {
  constructor(props) {
    super(props);
    
    this.nameInTree = this.props.parentNameInTree + this.props.label;
  }
  render() {
    const id = Uuid.getUuid()();
    const formName = this.props.name || Uuid.getUuid()();
    const label = this.props.label || '';
    const disabled = this.props.disabled ? 'disabled' : ''; 
    
    return (
      <label className="ss-checkbox" htmlFor={id}>
        <input id={id} type="checkbox" name={formName} disabled={disabled} />
        {label}
      </label>
    );
  }  
}

export default CheckBoxComponent;
