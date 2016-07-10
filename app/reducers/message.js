import Immutable from 'immutable';
import types from 'app/actions/types';

const findMessageSuccess = (state, action) => (Immutable.fromJS(action.message));

const clearMessageData = () => (new Immutable.Map());

const setMessageEditable = (state, action) => {
  const mutableState = state.toJS();
  mutableState.editing = action.editing;
  return Immutable.fromJS(mutableState);
};

const messageReducer = (state = new Immutable.Map(), action) => {
  switch (action.type) {
    case types.FIND_MESSAGE_SUCCESS:
      return findMessageSuccess(state, action);
    case types.CLEAR_MESSAGE_DATA:
      return clearMessageData(state, action);
    case types.SET_MESSAGE_EDITING:
      return setMessageEditable(state, action);
    default:
      return state;
  }
};

export default messageReducer;
