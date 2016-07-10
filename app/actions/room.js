import types from 'app/actions/types';

export default {
  findRoomSuccess: (room) => ({
    type: types.FIND_ROOM_SUCCESS,
    room,
  }),
  clearRoomData: () => ({
    type: types.CLEAR_ROOM_DATA,
    room: {},
  }),
  newMessagePosted: (message) => ({
    type: types.NEW_MESSAGE_POSTED,
    message,
  }),
  roomMessageEdited: (message) => ({
    type: types.ROOM_MESSAGE_EDITED,
    message,
  }),
};
