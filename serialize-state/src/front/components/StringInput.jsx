import React, { Component } from 'react';
import Uuid from '../services/Uuid';

class StringInput extends Component {
  render() {
    const name = this.props.name || Uuid.getUuid()();
    
    return (
      <input type="text" name={name}/>
    );
  }
}

export default StringInput;
