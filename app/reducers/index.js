import { combineReducers } from 'redux';
import sessionReducer from 'app/reducers/session';
import roomReducer from 'app/reducers/room';
import messageReducer from 'app/reducers/message';

const reducers = combineReducers({
  sessionState: sessionReducer,
  roomState: roomReducer,
  messageState: messageReducer,
});

export default reducers;
