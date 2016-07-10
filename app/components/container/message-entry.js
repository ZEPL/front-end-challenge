import React from 'react';
import { Link } from 'react-router';
import Api from 'app/api';
import Actions from 'app/actions';
import store from 'app/store';
import { HydratedMessagePropType } from 'app/components/prop-types';

class MessageEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleDelete() {
    Api.Delete.removeMessage(this.props.message.guid, this.props.roomName).then((room) => {
      store.dispatch(Actions.Room.findRoomSuccess(room));
      this.context.router.push(`/${this.props.roomName}`);
    });
  }

  handleEdit() {
    store.dispatch(Actions.Message.setEditing(true));
  }

  handleSave() {
    store.dispatch(Actions.Message.clearMessageData());
    Api.Put.editMessage(this.props.message.guid, this.refs.messageTextArea.value)
    .then((message) => {
      store.dispatch(Actions.Room.roomMessageEdited(message));
      this.context.router.push(`/${this.props.roomName}`);
    });
  }

  renderDeleteButton() {
    if (!this.props.fromLoggedUser) {
      return null;
    }
    return (<button
      onClick={this.handleDelete}
      className="delete-message-button message-button"
    >Delete</button>);
  }

  renderEditButton() {
    if (!this.props.fromLoggedUser || !this.props.editable) {
      return null;
    } else if (!this.props.editing) {
      return (<button
        onClick={this.handleEdit}
        className="edit-message-button message-button"
      >Edit</button>);
    }
    return (<button
      onClick={this.handleSave}
      className="edit-message-button message-button"
    >Save</button>);
  }

  renderText() {
    if (this.props.editing) {
      return (<textarea
        ref="messageTextArea"
        className="message-text-area"
        defaultValue={this.props.message.text}
      />);
    }
    return (<p className="message-text">{this.props.message.text}</p>);
  }

  render() {
    return (<div className="message-entry">
      <p className="message-title">
        <img
          src={this.props.message.user.avatarURL}
          alt={`${this.props.message.user.name}'s avatar`}
        />
        <span className="message-author-name">{this.props.message.user.name}</span>
        <Link
          to={`/${this.props.roomName}/${this.props.message.guid}`}
          className="message-date"
        >{this.props.message.date}</Link>
        {this.renderDeleteButton()}
        {this.renderEditButton()}
      </p>
      {this.renderText()}
    </div>);
  }
}

MessageEntry.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

MessageEntry.propTypes = {
  fromLoggedUser: React.PropTypes.bool.isRequired,
  editable: React.PropTypes.bool,
  editing: React.PropTypes.bool,
  roomName: React.PropTypes.string.isRequired,
  message: HydratedMessagePropType,
};

export default MessageEntry;
