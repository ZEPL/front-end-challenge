import React from 'react';
import { connect } from 'react-redux';
import fp from 'lodash/fp';
import store from 'app/store';
import Actions from 'app/actions';
import { Loading } from 'app/components/presentational';
import { MessageEntry } from 'app/components/container';
import Api from 'app/api';
import {
  HydratedDataPropType,
  HydratedMessagePropType,
  EmptyObjectPropType,
} from 'app/components/prop-types';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    Api.Get.findMessageInRoom(this.props.routeParams.messageId, this.props.room.name)
    .then((message) => { store.dispatch(Actions.Message.findMessageSuccess(message)); })
    .catch(() => { this.context.router.push(`/${this.props.room.name}`); });
  }

  componentWillUnmount() {
    store.dispatch(Actions.Message.clearMessageData());
  }

  closeModal(event) {
    if (event.target.className === 'message-wrapper') {
      this.context.router.push(`/${this.props.room.name}`);
    }
  }

  renderLoading() {
    return (<div className="message-wrapper">
      <Loading hiddenSideBar />
    </div>);
  }

  renderMessage() {
    return (<div className="message-wrapper" onClick={this.closeModal}>
      <MessageEntry
        editable={this.props.session.loggedUser.guid === this.props.message.user.guid}
        editing={this.props.message.editing}
        fromLoggedUser={this.props.session.loggedUser.guid === this.props.message.user.guid}
        message={this.props.message}
        roomName={this.props.room.name}
      />
    </div>);
  }

  render() {
    if (fp.isEmpty(this.props.message)) {
      return this.renderLoading();
    }
    return this.renderMessage();
  }
}

Message.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

Message.propTypes = {
  session: React.PropTypes.oneOfType([
    HydratedDataPropType,
    EmptyObjectPropType,
  ]),
  room: React.PropTypes.oneOfType([
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
    }),
    EmptyObjectPropType,
  ]),
  message: React.PropTypes.oneOfType([
    HydratedMessagePropType,
    EmptyObjectPropType,
  ]),
  routeParams: React.PropTypes.shape({
    messageId: React.PropTypes.string.isRequired,
  }),
};

const mapStateToProps = (state) => ({
  session: state.sessionState.toJS(),
  room: state.roomState.toJS(),
  message: state.messageState.toJS(),
});

export default connect(mapStateToProps)(Message);
