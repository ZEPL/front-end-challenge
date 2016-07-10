import database from 'app/api/database.js';

const restoreSession = () => (new Promise((resolve) => {
  setTimeout(() => {
    const loggedUserId = database.getLoggedUserId();
    const hydratedSession = database.hydrateSession(loggedUserId);
    resolve(hydratedSession);
  }, database.responseTime());
}));

const findRoom = (roomName) => (new Promise((resolve) => {
  setTimeout(() => {
    const loggedUserId = database.getLoggedUserId();
    let room = database.findRoomFromName(roomName);

    if (room) {
      if (database.loggedUserIsInRoom(roomName)) {
        resolve({ room: database.hydrateRoom(room) });
      } else {
        room = database.addUserToRoom(room, loggedUserId);
        resolve({
          room: database.hydrateRoom(room),
          session: database.hydrateSession(loggedUserId),
        });
      }
    } else {
      room = database.createNewRoom(roomName);
      resolve({
        room: database.hydrateRoom(room),
        session: database.hydrateSession(loggedUserId),
      });
    }
  }, database.responseTime());
}));

const findMessageInRoom = (messageId, roomName) => (new Promise((resolve, reject) => {
  setTimeout(() => {
    if (database.messageIsInRoom(messageId, roomName)) {
      const message = database.findMessage(messageId);
      if (message != null) {
        return resolve(database.hydrateMessage(message));
      }
    }
    return reject();
  }, database.responseTime());
}));

export default {
  restoreSession,
  findRoom,
  findMessageInRoom,
};
