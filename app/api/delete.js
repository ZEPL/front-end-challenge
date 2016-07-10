import database from 'app/api/database';

const removeMessage = (messageId, roomName) => (new Promise((resolve, reject) => {
  if (database.messageIsFromLoggedUser(messageId) === false) {
    return reject('only logged user is allowed to remove message');
  }
  let room = database.findRoomFromName(roomName);
  if (room == null) {
    return reject('room not found');
  }
  room = database.removeMessageFromRoom(messageId, room);
  return resolve(database.hydrateRoom(room));
}));

export default {
  removeMessage,
};
