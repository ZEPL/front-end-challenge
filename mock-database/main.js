import Chance from 'chance';
import fs from 'fs';

// This database is seeded you can remove the string for random database generation
const chance = new Chance('slack-clone-seed');

const USER_NUMBER = 8;
const CHANNEL_NUMBER = 3;
const MESSAGES_PER_CHANNEL = 10;

const userIds = chance.unique(chance.guid, USER_NUMBER);
const userNames = chance.unique(chance.name, USER_NUMBER);
const publicChannelIds = chance.unique(chance.guid, CHANNEL_NUMBER);
const privateChannelIds = chance.unique(chance.guid, USER_NUMBER - 1);
const channelNames = chance.unique(chance.city, CHANNEL_NUMBER);
const messageIds = chance.unique(
  chance.guid, MESSAGES_PER_CHANNEL * (USER_NUMBER - 1 + CHANNEL_NUMBER)
);
const messageTimeStamps = chance.unique(
  chance.timestamp, MESSAGES_PER_CHANNEL * (USER_NUMBER - 1 + CHANNEL_NUMBER)
);

// Chronogical order
messageTimeStamps.sort((a, b) => (a - b));

let messageIndex = 0;
let privateChannelsIndex = 0;

const db = {
  channel: {},
  message: {},
  user: {},
  loggedUser: {
    guid: chance.pickone(userIds),
  },
};

// Create users
userIds.forEach((guid, key) => {
  db.user[guid] = {
    guid,
    name: userNames[key],
    avatarURL: `/public/img/avatar-${key}.png`,
  };
});

// Create messages
messageIds.forEach((guid, key) => {
  db.message[guid] = {
    guid,
    text: chance.paragraph(),
    date: new Date(messageTimeStamps[key] * 1000).toLocaleString(),
  };
});

// Create public channels
publicChannelIds.forEach((guid, key) => {
  db.channel[guid] = {
    guid,
    type: 'public',
    name: channelNames[key],
    members: Array.from(userIds),
    messages: Array.apply(null, { length: MESSAGES_PER_CHANNEL }).map(() => {
      const ret = messageIds[messageIndex];
      db.message[ret].user = chance.pickone(userIds);
      messageIndex++;
      return ret;
    }),
  };
});

// Create private channels: 1 per user minus logged user
userIds.forEach((guid) => {
  if (guid !== db.loggedUser.guid) {
    db.channel[privateChannelIds[privateChannelsIndex]] = {
      guid: privateChannelIds[privateChannelsIndex],
      type: 'private',
      name: db.user[guid].name,
      members: [guid, db.loggedUser.guid],
      messages: Array.apply(null, { length: MESSAGES_PER_CHANNEL }).map(() => {
        const ret = messageIds[messageIndex];
        db.message[ret].user = chance.pickone([guid, db.loggedUser.guid]);
        messageIndex++;
        return ret;
      }),
    };
    privateChannelsIndex++;
  }
});

// Create a json file with pretty print
fs.writeFile('./app/api/db.json', JSON.stringify(db, null, '\t'), (err) => {
  if (err) {
    throw err;
  }
});
