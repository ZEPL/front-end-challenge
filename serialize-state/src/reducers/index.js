//Main reducer

import { GET_STATE, SET_STATE, MUTATE_FORM } from '../constants';

import defaultState from '../states';
import copyDataToClipboard from '../helpers';

import clipboardReducer from './ClipboardReducer';
import profileFormReducer from './ProfileFormReducer';

const combinedReducer = (state = defaultState, action) => {
  let newState;

  switch(action.type) {

    case GET_STATE: // actions handled by clipboard reducer
    case SET_STATE:
      newState = clipboardReducer(state, action);
      break;

    case MUTATE_FORM: // Child form mutation event
      newState = profileFormReducer(state, action);
      break;

    default: // deafult operation, just copies state
      newState = { ...state };
      break;
  }

  return newState;
};

export default combinedReducer;
