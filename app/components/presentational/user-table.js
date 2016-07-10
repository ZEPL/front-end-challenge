import React from 'react';
import fp from 'lodash/fp';
import { UserRow } from 'app/components/container';
import { DryChannelPropType } from 'app/components/prop-types';

const UserTable = ({ privateRooms, focusedRoomId }) => (
  <table className="user-table">
    <thead>USERS</thead>
    <tbody>{fp.map((privateRoom) => (
      <UserRow
        key={privateRoom.guid}
        userName={privateRoom.name}
        isFocused={focusedRoomId != null && privateRoom.guid === focusedRoomId}
      />))(privateRooms)}
    </tbody>
  </table>
);

UserTable.propTypes = {
  privateRooms: React.PropTypes.arrayOf(DryChannelPropType).isRequired,
  focusedRoomId: React.PropTypes.string,
};

export default UserTable;
