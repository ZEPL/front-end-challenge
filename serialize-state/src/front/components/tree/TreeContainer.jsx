import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

function TreeContainer({ tree }) {
  return (
    <div className="ss-radio-container">
      {tree.map(element => element.create())}
    </div>
  );
}

TreeContainer.propTypes = {
  tree: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    tree: state.treeUpdate.tree,
  };
}

export default connect(mapStateToProps)(TreeContainer);
