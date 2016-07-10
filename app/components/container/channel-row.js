import React from 'react';
import { Link } from 'react-router';
import store from 'app/store';
import Api from 'app/api';
import Actions from 'app/actions';

class ChannelRow extends React.Component {
  constructor(props) {
    super(props);
    this.joinChannel = this.joinChannel.bind(this);
    this.closeChannel = this.closeChannel.bind(this);
  }

  joinChannel() {
    store.dispatch(Actions.Room.clearRoomData());
    Api.Get.findRoom(this.props.channelName).then(({ room }) => {
      store.dispatch(Actions.Room.findRoomSuccess(room));
    });
  }

  closeChannel() {
    if (this.context.router.isActive(`/${this.props.channelName}`)) {
      this.context.router.push('/');
    }
    Api.Put.leaveRoom(this.props.channelName).then((session) => {
      store.dispatch(Actions.Session.updateSessionSuccess(session));
    });
  }

  render() {
    return (
      <tr className={`channel-row${this.props.isFocused ? ' focused-channel-row' : ''}`}>
        <td className="channel-name">
          <Link
            to={`/${this.props.channelName}`}
            activeClassName="active"
            onClick={this.joinChannel}
          >{this.props.channelName}</Link>
          <button className="select-marker" onClick={this.closeChannel}>X</button>
        </td>
      </tr>
    );
  }
}

ChannelRow.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

ChannelRow.propTypes = {
  channelName: React.PropTypes.string.isRequired,
  isFocused: React.PropTypes.bool.isRequired,
};

export default ChannelRow;
