// Reducer for clipboard component

import { GET_STATE, SET_STATE } from '../constants';
import defaultState from '../states';
import copyDataToClipboard from '../helpers';

const clipboardReducer = (state = defaultState, action) => {
  let newState;

  switch(action.type) {

    case GET_STATE: // copies state to clipboard
      newState = { ...state };
      copyDataToClipboard(JSON.stringify(newState));
      break;

    case SET_STATE: // replaces entire state with data from clipboard
      newState = { ...action.state };
      break;

    default: // deafult operation, just copies state
      newState = { ...state };
      break;
  }

  return newState;
};

export default clipboardReducer;
