import Immutable from 'immutable';
import fp from 'lodash/fp';
import types from 'app/actions/types';

const findRoomSuccess = (state, action) => (Immutable.fromJS(action.room));

const newMessagePosted = (state, action) => {
  const room = state.toJS();
  room.messages.push(action.message);
  return Immutable.fromJS(room);
};

const roomMessageEdited = (state, action) => {
  const mutableRoom = state.toJS();
  const index = fp.findIndex(
    (message) => (message.guid === action.message.guid)
  )(mutableRoom.messages);
  if (index !== -1) {
    mutableRoom.messages[index] = action.message;
  }
  return Immutable.fromJS(mutableRoom);
};

const clearRoomData = () => (new Immutable.Map());

const roomReducer = (state = new Immutable.Map(), action) => {
  switch (action.type) {
    case types.FIND_ROOM_SUCCESS:
      return findRoomSuccess(state, action);
    case types.NEW_MESSAGE_POSTED:
      return newMessagePosted(state, action);
    case types.ROOM_MESSAGE_EDITED:
      return roomMessageEdited(state, action);
    case types.CLEAR_ROOM_DATA:
      return clearRoomData(state, action);
    default:
      return state;
  }
};

export default roomReducer;
