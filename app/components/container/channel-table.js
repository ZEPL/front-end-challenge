import React from 'react';
import fp from 'lodash/fp';
import Api from 'app/api';
import Actions from 'app/actions';
import store from 'app/store';
import { DryChannelPropType } from 'app/components/prop-types';
import { ChannelRow } from 'app/components/container';

class ChannelTable extends React.Component {

  constructor(props) {
    super(props);
    this.inputValue = '';
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter' && !fp.isEmpty(this.inputValue)) {
      const roomName = this.inputValue;
      this.refs.channelInput.value = '';
      this.context.router.push(`/${roomName}/`);
      store.dispatch(Actions.Room.clearRoomData());
      Api.Get.findRoom(roomName).then(({ session, room }) => {
        if (session != null) {
          store.dispatch(Actions.Session.updateSessionSuccess(session));
        }
        store.dispatch(Actions.Room.findRoomSuccess(room));
      });
    }
  }

  handleChange(event) {
    this.inputValue = event.target.value;
  }

  render() {
    const channelRows = fp.map(
      (publicRoom) => (<ChannelRow
        key={publicRoom.guid}
        channelName={publicRoom.name}
        isFocused={this.props.focusedRoomId != null && publicRoom.guid === this.props.focusedRoomId}
        loggedUserId={this.props.loggedUserId}
      />)
    )(this.props.publicRooms);

    return (
      <div className="channel-wrapper">
        <table className="channel-table">
          <thead>CHANNELS</thead>
          <tbody>{channelRows}</tbody>
        </table>
        <input
          className="new-channel-input"
          type="text"
          ref="channelInput"
          placeholder="Join a Channel"
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

ChannelTable.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

ChannelTable.propTypes = {
  publicRooms: React.PropTypes.arrayOf(DryChannelPropType).isRequired,
  focusedRoomId: React.PropTypes.string,
  loggedUserId: React.PropTypes.string,
};

export default ChannelTable;
