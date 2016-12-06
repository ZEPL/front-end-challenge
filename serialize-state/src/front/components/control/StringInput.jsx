import React, { PropTypes } from 'react';
import Uuid from '../../services/Uuid';

function StringInput({ name = Uuid.getUuid()(), onFocusHandler, treeStr }) {
  return (
    <input 
      type="text" 
      name={name} 
      onFocus={onFocusHandler} 
      value={treeStr}
    />
  );
}

StringInput.propTypes = {
  name: PropTypes.string.isRequired,
  onFocusHandler: PropTypes.func,
  treeStr: PropTypes.string,
};

StringInput.defaultProps = {
  name: Uuid.getUuid()(),
};

export default StringInput;
