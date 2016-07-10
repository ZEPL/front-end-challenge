import React from 'react';
import { MessageList } from 'app/components/presentational';
import { CommentBox } from 'app/components/container';
import { HydratedMessagePropType } from 'app/components/prop-types';

const ChatWindow = ({ roomName, messages, loggedUserId }) => (
  <div className="chat-window">
    <MessageList loggedUserId={loggedUserId} messages={messages} roomName={roomName} />
    <CommentBox roomName={roomName} />
  </div>
);

ChatWindow.propTypes = {
  loggedUserId: React.PropTypes.string.isRequired,
  roomName: React.PropTypes.string.isRequired,
  messages: React.PropTypes.arrayOf(HydratedMessagePropType),
};

export default ChatWindow;
