import types from 'app/actions/types';

export default {
  findMessageSuccess: (message) => ({
    type: types.FIND_MESSAGE_SUCCESS,
    message,
  }),
  clearMessageData: () => ({
    type: types.CLEAR_MESSAGE_DATA,
    message: {},
  }),
  setEditing: (editing) => ({
    type: types.SET_MESSAGE_EDITING,
    editing,
  }),
};
