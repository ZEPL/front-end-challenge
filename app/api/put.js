import database from 'app/api/database';

const leaveRoom = (roomName) => (new Promise((resolve) => {
  const loggedUserId = database.getLoggedUserId();

  database.removeUserFromRoom(loggedUserId, roomName);

  resolve(database.hydrateSession(loggedUserId));
}));

const editMessage = (messageId, messageText) => (new Promise((resolve) => {
  setTimeout(() => {
    database.setMessageText(messageId, messageText);
    const message = database.findMessage(messageId);
    const hydratedMessage = database.hydrateMessage(message);
    resolve(hydratedMessage);
  }, database.responseTime());
}));

export default {
  leaveRoom,
  editMessage,
};
