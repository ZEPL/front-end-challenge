import React from 'react';
import { connect } from 'react-redux';
import { getState, setState } from '../actions';
import Clipboard from '../containers/Clipboard.jsx';

// Takes a component as param and return it wrapped with clipboard component
let SerializeState = (WrappedComponent) => {
  return (
    <div>
      <Clipboard></Clipboard>
      <WrappedComponent />
    </div>
  );
}

export default SerializeState;
