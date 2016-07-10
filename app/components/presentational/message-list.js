import React from 'react';
import ReactDOM from 'react-dom';
import fp from 'lodash/fp';
import { MessageEntry } from 'app/components/container';
import { HydratedMessagePropType } from 'app/components/prop-types';

class MessageList extends React.Component {

  componentDidMount() {
    ReactDOM.findDOMNode(this).scrollTop = ReactDOM.findDOMNode(this).scrollHeight;
  }

  componentDidUpdate() {
    ReactDOM.findDOMNode(this).scrollTop = ReactDOM.findDOMNode(this).scrollHeight;
  }

  render() {
    return (
      <div className="message-list">{fp.map((message) => (
        <MessageEntry
          fromLoggedUser={this.props.loggedUserId === message.user.guid}
          key={message.guid}
          roomName={this.props.roomName}
          message={message}
        />))(this.props.messages)}
      </div>
    );
  }
}

MessageList.propTypes = {
  loggedUserId: React.PropTypes.string.isRequired,
  roomName: React.PropTypes.string.isRequired,
  messages: React.PropTypes.arrayOf(HydratedMessagePropType).isRequired,
};

export default MessageList;
