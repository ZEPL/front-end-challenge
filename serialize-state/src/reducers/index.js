import { GET_STATE, SET_STATE, MUTATE_FORM } from '../constants';
import defaultState from '../states';

// Helper function to copy data into clipboard
// Inspired from http://stackoverflow.com/a/34192073/5154397
const copyDataToClipboard = data => {
  let tempEl = document.createElement('div'); // creates a temp. element
  tempEl.style.opacity = 0;
  tempEl.innerHTML = data; // places data inside it
  document.body.appendChild(tempEl); // appends to main document

  let range = document.createRange(); // creates a selection
  range.selectNode(tempEl);
  window.getSelection().addRange(range);
  document.execCommand('copy'); // copies text
  document.body.removeChild(tempEl); // removes unwanted element
};

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
