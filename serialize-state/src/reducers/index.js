import { GET_STATE, SET_STATE, MUTATE_FORM } from '../constants';
import defaultState from '../states';
import copyDataToClipboard from '../helpers';

const implementFormState = (state = defaultState, action) => {
  let newState;

  switch(action.type) {

    case GET_STATE: // copies state to clipboard
      newState = { ...state };
      copyDataToClipboard(JSON.stringify(newState));
      break;

    case SET_STATE: // Replaces entire state
      newState = { ...action.state };
      break;

    case MUTATE_FORM: // Selectively overrites object keys
      newState = { ...state, ...action.state };
      break;

    default: // deafult operation, just copies state
      newState = { ...state };
      break;
  }

  return newState;
};

export default implementFormState;
