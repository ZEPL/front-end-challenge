import Immutable from 'immutable';
import types from 'app/actions/types';

const restoreSessionSuccess = (state, action) => (Immutable.fromJS(action.session));

const updateSessionSuccess = (state, action) => (Immutable.fromJS(action.session));

const sessionReducer = (state = new Immutable.Map(), action) => {
  switch (action.type) {
    case types.RESTORE_SESSION_SUCCESS:
      return restoreSessionSuccess(state, action);
    case types.UPDATE_SESSION_SUCCESS:
      return updateSessionSuccess(state, action);
    default:
      return state;
  }
};

export default sessionReducer;
