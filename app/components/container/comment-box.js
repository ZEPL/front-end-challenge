import React from 'react';
import fp from 'lodash/fp';
import store from 'app/store';
import Actions from 'app/actions';
import Api from 'app/api';

class CommentBox extends React.Component {

  constructor(props) {
    super(props);
    this.inputValue = '';
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter' && !fp.isEmpty(this.inputValue)) {
      const messageText = this.inputValue;
      this.refs.messageInput.value = '';
      Api.Post.sendMessage(messageText, new Date(), this.props.roomName)
      .then((message) => {
        store.dispatch(Actions.Room.newMessagePosted(message));
      });
      this.inputValue = '';
    }
  }

  handleChange(event) {
    this.inputValue = event.target.value;
  }

  render() {
    return (
      <div className="comment-box">
        <input
          className="comment-input"
          type="text"
          ref="messageInput"
          placeholder="Message"
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

CommentBox.propTypes = {
  roomName: React.PropTypes.string.isRequired,
};

export default CommentBox;
