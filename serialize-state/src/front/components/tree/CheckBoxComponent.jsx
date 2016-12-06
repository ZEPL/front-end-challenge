import React, { Component } from 'react';
import { connect } from 'react-redux';
import Uuid from '../../services/Uuid';
import treeUpdateAction from '../../actions/TreeUpdateAction';
import './CheckBoxComponent.scss';

class CheckBoxComponent extends Component {
  constructor(props) {
    super(props);
  }

  onChange(event) {
    const model = Object.assign({}, this.props.model);
    model.checked = event.target.checked;

    this.props.onTreeUpdate(model);
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

function mapDispatchToProps(dispatch) {
  return {
    onTreeUpdate: function (model) {
      dispatch(treeUpdateAction(model));
    }
  }
}

export default connect(null, mapDispatchToProps)(CheckBoxComponent);
