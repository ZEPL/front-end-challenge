import React, { Component } from 'react';
import update from 'react-addons-update';
import Uuid from '../services/Uuid';
import './CheckBoxComponent.scss';

class CheckBoxComponent extends Component {
  constructor(props) {
    super(props);
    
    this.nameInTree = (this.props.parentNameInTree !== '') ? 
      `${this.props.parentNameInTree}.${this.props.label}` : this.props.label;
    
    this.state = {
      node: {
        name: this.props.label,
        type: 'checkbox',
        checked: false
      }
    };
  }

  componentDidMount() {
    this.props.onTreeUpdate(this.nameInTree, this.state.node);
  }
  
  onChange(event) {
    const newNode = update(this.state.node, { checked: { $set: event.target.checked } });
    this.setState({ node: newNode });
    this.props.onTreeUpdate(this.nameInTree, newNode);
    
    console.log('a -> ', event.target.checked, this.state, newNode);
  }
  
  render() {
    const id = Uuid.getUuid()();
    const formName = this.props.name || Uuid.getUuid()();
    const label = this.props.label || '';
    const disabled = this.props.disabled ? 'disabled' : ''; 
    
    return (
      <label className="ss-checkbox" htmlFor={id}>
        <input id={id} type="checkbox" name={formName} disabled={disabled} onChange={this.onChange.bind(this)} />
        {label}
      </label>
    );
  }  
}

export default CheckBoxComponent;
