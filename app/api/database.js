import fp from 'lodash/fp';
import Chance from 'chance';
import database from 'app/api/db.json';

const chance = new Chance();

// Get

const getLoggedUserId = () => (database.loggedUser.guid);

const getChannels = () => (database.channel);

const findRoomFromName = (roomName) => (
  fp.find((channel) => (channel.name === roomName))(getChannels())
);

const findMessage = (messageId) => {
  if (fp.isEmpty(database.message[messageId])) {
    return null;
  }
  return database.message[messageId];
};

const getMessages = (room) => (
  (fp.map((messageId) => {
    const ret = fp.cloneDeep(database.message[messageId]);
    ret.user = fp.cloneDeep(database.user[ret.user]);
    return ret;
  }))(room.messages)
);

const getJoinedChannels = (userId, channels) => (
  fp.reduce((result, value) => {
    if (fp.find((memberId) => (memberId === userId))(value.members)) {
      result[value.type].push({
        guid: value.guid,
        name: value.name,
        type: value.type,
      });
    }
    return result;
  }, { public: [], private: [] })(channels)
);

// Check

const messageIsFromLoggedUser = (messageId) => (
  database.message[messageId].user === getLoggedUserId()
);

const messageIsInRoom = (messageId, roomName) => {
  const room = findRoomFromName(roomName);
  if (room == null) {
    return false;
  }
  const message = fp.find((key) => (key === messageId))(room.messages);
  if (message == null) {
    return false;
  }
  return true;
};

const userIsInRoom = (userId, roomName) => {
  const room = findRoomFromName(roomName);
  if (room == null) {
    return false;
  }
  const user = fp.find((key) => (key === userId))(room.members);
  if (user == null) {
    return false;
  }
  return true;
};

const loggedUserIsInRoom = (roomName) => (userIsInRoom(getLoggedUserId(), roomName));

// Set

const setMessageText = (messageId, messageText) => {
  database.message[messageId].text = messageText;
};

const addMessageToRoom = (message, roomName) => {
  const room = findRoomFromName(roomName);
  room.messages.push(message.guid);
  return room;
};

const addUserToRoom = (room, userId) => {
  room.members.push(userId);
  return room;
};

// Create

const createNewRoom = (roomName) => {
  const newRoom = {
    guid: chance.guid(),
    type: 'public',
    name: roomName,
    members: [database.loggedUser.guid],
    messages: [],
  };

  database.channel[newRoom.guid] = newRoom;

  return newRoom;
};

const createMessageFromLoggedUser = (text, date) => {
  const message = {
    guid: chance.guid(),
    text,
    date: date.toLocaleString(),
    user: getLoggedUserId(),
  };

  database.message[message.guid] = message;

  return message;
};

// Remove

const removeMessageFromRoom = (messageId, room) => {
  const index = fp.findIndex((element) => (element === messageId))(room.messages);
  if (index !== -1) {
    room.messages.splice(index, 1);
  }
  return room;
};

const removeUserFromRoom = (userId, roomName) => {
  const room = findRoomFromName(roomName);
  if (room != null) {
    room.members = fp.remove((memberId) => (
      memberId === userId
    ))(room.members);
  }
  return room;
};

// Hydrate

const hydrateSession = (userId) => ({
  loggedUser: {
    name: database.user[userId].name,
    guid: userId,
  },
  joinedChannels: getJoinedChannels(userId, database.channel),
});

const hydrateRoom = (room) => {
  const hydratedRoom = fp.cloneDeep(room);
  hydratedRoom.messages = getMessages(room);
  return hydratedRoom;
};

const hydrateMessage = (message) => {
  const hydratedMessage = fp.cloneDeep(message);
  hydratedMessage.user = fp.cloneDeep(database.user[message.user]);
  return hydratedMessage;
};

// Tools

const responseTime = () => (1000 * Math.random());

export default {
  // Get
  getLoggedUserId,
  getChannels,
  getMessages,
  getJoinedChannels,
  findRoomFromName,
  findMessage,
  // Check
  messageIsFromLoggedUser,
  loggedUserIsInRoom,
  messageIsInRoom,
  // Set
  setMessageText,
  addMessageToRoom,
  addUserToRoom,
  // Create
  createNewRoom,
  createMessageFromLoggedUser,
  // Remove
  removeMessageFromRoom,
  removeUserFromRoom,
  // Hydrate
  hydrateSession,
  hydrateRoom,
  hydrateMessage,
  // Tools
  responseTime,
};
