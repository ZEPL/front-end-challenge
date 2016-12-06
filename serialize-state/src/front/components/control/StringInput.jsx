import React, { Component } from 'react';
import Uuid from '../../services/Uuid';

class StringInput extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const name = this.props.name || Uuid.getUuid()();

    return (
      <input type="text" name={name} onFocus={this.props.onFocusHandler} value={this.props.treeStr}/>
    );
  }
}

export default StringInput;
