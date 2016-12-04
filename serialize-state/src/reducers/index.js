import { GET_STATE, SET_STATE } from '../constants';

// default state
const initialState = () => ({
  userName: 'Julian',
  userLikes: null
});

// Helper function to copy data into clipboard
// Inspired from http://stackoverflow.com/a/34192073/5154397
const copyDataToClipboard = data => {
  console.log(data);
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

const consoleState = (newState = initialState, action) => {
  console.log(newState, action);
  switch(action.type) {
    case GET_STATE:
      copyDataToClipboard(JSON.stringify(newState));
      break;
    case SET_STATE:
      console.log(SET_STATE);
      break;
  }
  return newState;
};

export default consoleState;
