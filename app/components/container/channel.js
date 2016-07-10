import React from 'react';
import { connect } from 'react-redux';
import fp from 'lodash/fp';
import Api from 'app/api';
import store from 'app/store';
import Actions from 'app/actions';
import { Sidebar, Loading, ChatWindow } from 'app/components/presentational';
import { HydratedDataPropType, EmptyObjectPropType } from 'app/components/prop-types';

class Channel extends React.Component {
  componentDidMount() {
    document.title = `Slack Clone - ${this.props.routeParams.roomName}`;

    Api.Get.findRoom(this.props.routeParams.roomName).then(({ session, room }) => {
      if (session != null) {
        store.dispatch(Actions.Session.updateSessionSuccess(session));
      }
      store.dispatch(Actions.Room.findRoomSuccess(room));
    });
  }

  componentDidUpdate() {
    document.title = `Slack Clone - ${this.props.routeParams.roomName}`;

    if (this.props.routeParams != null &&
        this.props.room.name != null &&
        this.props.room.name !== this.props.routeParams.roomName) {
      store.dispatch(Actions.Room.clearRoomData());
      Api.Get.findRoom(this.props.routeParams.roomName).then(({ session, room }) => {
        if (session != null) {
          store.dispatch(Actions.Session.updateSessionSuccess(session));
        }
        store.dispatch(Actions.Room.findRoomSuccess(room));
      });
    }
  }

  componentWillUnmount() {
    document.title = 'Slack Clone';

    store.dispatch(Actions.Room.clearRoomData());
  }

  renderLoading() {
    return (<div>
      <Sidebar
        publicRooms={this.props.session.joinedChannels.public}
        privateRooms={this.props.session.joinedChannels.private}
        focusedRoomId={this.props.routeParams.roomName}
        loggedUserId={this.props.session.loggedUser.guid}
      />
      <Loading />
    </div>);
  }

  renderChannel() {
    return (<div>
      <Sidebar
        publicRooms={this.props.session.joinedChannels.public}
        privateRooms={this.props.session.joinedChannels.private}
        focusedRoomId={this.props.routeParams.roomName}
        loggedUserId={this.props.session.loggedUser.guid}
      />
      <ChatWindow
        loggedUserId={this.props.session.loggedUser.guid}
        messages={this.props.room.messages}
        roomName={this.props.room.name}
      />
    </div>);
  }

  renderChildren() {
    return (<div>
      <Sidebar
        publicRooms={this.props.session.joinedChannels.public}
        privateRooms={this.props.session.joinedChannels.private}
        focusedRoomId={this.props.routeParams.roomName}
        loggedUserId={this.props.session.loggedUser.guid}
      />
      <ChatWindow
        loggedUserId={this.props.session.loggedUser.guid}
        messages={this.props.room.messages}
        roomName={this.props.room.name}
      />
      {this.props.children}
    </div>);
  }

  render() {
    if (fp.isEmpty(this.props.room)) {
      return this.renderLoading();
    } else if (this.props.children == null) {
      return this.renderChannel();
    }
    return this.renderChildren();
  }
}

Channel.propTypes = {
  children: React.PropTypes.node,
  routeParams: React.PropTypes.shape({
    roomName: React.PropTypes.string.isRequired,
  }),
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
};

const mapStateToProps = (state) => ({
  session: state.sessionState.toJS(),
  room: state.roomState.toJS(),
});

export default connect(mapStateToProps)(Channel);
