import React, { Component } from 'react';
import Uuid from '../services/Uuid';

class StringInput extends Component {
  onFocus() {
    console.log(JSON.stringify(this.props.tree));
  }
  
  render() {
    const name = this.props.name || Uuid.getUuid()();
    
    return (
      <input type="text" name={name} onFocus={this.onFocus.bind(this)}/>
    );
  }
}

export default StringInput;
