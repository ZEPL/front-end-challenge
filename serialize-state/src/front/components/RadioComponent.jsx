import React, { Component, PropTypes } from 'react';
import update from 'react-addons-update';
import Uuid from '../services/Uuid';
import './RadioComponent.scss';

class RadioComponent extends Component {
  constructor (props) {
    super(props);
    
    this.elemId = Uuid.getUuid()();
    this.state = {
      checked: false,
      node: {
        name: this.props.label,
        type: 'radio',
        checked: false
      }
    };

    this.nameInTree = (this.props.parentNameInTree !== '') ? 
      `${this.props.parentNameInTree}.${this.props.label}` : this.props.label;
  }
  
  onChange() {
    const newNode = update(this.state.node, { checked: { $set: true } });
    this.setState({ node: newNode });
    this.props.onRadioMonitor(this.elemId);
    this.props.onTreeUpdate(this.nameInTree, newNode);
  }
  
  componentDidMount() {
    this.props.onTreeUpdate(this.nameInTree, this.state.node);
  }
  
  render() {
    const formName = this.props.name || Uuid.getUuid()();
    const label = this.props.label || '';
    const isChildrenDisabled = !this.state.node.checked;
    
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
