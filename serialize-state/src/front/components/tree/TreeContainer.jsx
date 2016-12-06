import React, { Component } from 'react';
import { connect } from 'react-redux';

class TreeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const elements = this.props.tree.map(element => element.create());
    
    return (
      <div className="ss-radio-container">
        {elements}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tree: state.treeUpdate.tree
  }
}

export default connect(mapStateToProps)(TreeContainer);
