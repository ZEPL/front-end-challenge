// Reducer for profileForm component

import { GET_STATE, SET_STATE, MUTATE_FORM } from '../constants';
import defaultState from '../states';

const profileFormReducer = (state = defaultState, action) => {
  let newState;

  switch(action.type) {
    case MUTATE_FORM: // selectively overrites object keys
      newState = { ...state, ...action.state };
      break;

    default: // deafult operation, just copies state
      newState = { ...state };
      break;
  }

  return newState;
};

export default profileFormReducer;
