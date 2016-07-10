import database from 'app/api/database.js';

const sendMessage = (text, date, roomName) => (new Promise((resolve) => {
  const message = database.createMessageFromLoggedUser(text, date);

  database.addMessageToRoom(message, roomName);

  resolve(database.hydrateMessage(message));
}));

export default {
  sendMessage,
};
