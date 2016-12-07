import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Uuid from '../../services/Uuid';
import treeUpdateAction from '../../actions/TreeUpdateAction';
import './RadioComponent.scss';

class RadioComponent extends Component {
  constructor(props) {
    super(props);
    
    this.elemId = Uuid.getUuid()();
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(event) {
    const model = Object.assign({}, this.props.model);
    model.checked = event.target.checked;
    
    this.props.onTreeUpdate(model);
  }

  render() {
    const formName = this.props.name || Uuid.getUuid()();
    const label = this.props.label || '';
    const isChildrenDisabled = !this.props.model.checked;
    
    const children = React.Children.map(this.props.children, element => 
      React.cloneElement(element, { disabled: isChildrenDisabled }));
    
    return (
      <div className="ss-radio">
        <label htmlFor={this.elemId}>
          <input 
            id={this.elemId} 
            type="radio" 
            name={formName} 
            onChange={this.onChange} 
            checked={this.props.model.checked}
          />
          {label}
        </label>
        <div className="ss-radio-child-container">
          {children}
        </div>
      </div>
    );
  }
}

RadioComponent.propTypes = {
  model: PropTypes.object,  
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onTreeUpdate: PropTypes.func.isRequired,
  children: PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  return {
    onTreeUpdate: (model) => { dispatch(treeUpdateAction(model)); }, 
  };
}

export default connect(null, mapDispatchToProps)(RadioComponent);
