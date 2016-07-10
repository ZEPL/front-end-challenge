import React from 'react';
import { Link } from 'react-router';
import Api from 'app/api';
import store from 'app/store';
import Actions from 'app/actions';

class UserRow extends React.Component {
  constructor(props) {
    super(props);
    this.findRoom = this.findRoom.bind(this);
  }

  findRoom() {
    store.dispatch(Actions.Room.clearRoomData());
    Api.Get.findRoom(this.props.userName).then(({ room }) => {
      store.dispatch(Actions.Room.findRoomSuccess(room));
    });
  }

  render() {
    return (<tr className={`user-row${this.props.isFocused ? ' focused-user-row' : ''}`}>
      <td className="user-name">
        <Link
          to={`/${this.props.userName}`}
          activeClassName="active"
          onClick={this.findRoom}
        >{this.props.userName}</Link>
        <button className="select-marker">X</button>
      </td>
    </tr>);
  }
}

UserRow.propTypes = {
  userName: React.PropTypes.string.isRequired,
  isFocused: React.PropTypes.bool.isRequired,
};

export default UserRow;
