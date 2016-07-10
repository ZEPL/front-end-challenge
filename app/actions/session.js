import types from 'app/actions/types';

export default {
  restoreSessionSuccess: (session) => ({
    type: types.RESTORE_SESSION_SUCCESS,
    session,
  }),
  updateSessionSuccess: (session) => ({
    type: types.UPDATE_SESSION_SUCCESS,
    session,
  }),
};
