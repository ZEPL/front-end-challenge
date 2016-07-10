import React from 'react';
import { Link } from 'react-router';
import { ChannelTable } from 'app/components/container';
import { UserTable } from 'app/components/presentational';
import { DryChannelPropType } from 'app/components/prop-types';

const Sidebar = ({ publicRooms, privateRooms, focusedRoomId, loggedUserId }) => (
  <div className="side-bar">
    <Link to="/" className="home-link" activeClassName="active">
      <img src="/public/img/logo.png" alt="App logo" />
    </Link>
    <ChannelTable
      publicRooms={publicRooms}
      focusedRoomId={focusedRoomId}
      loggedUserId={loggedUserId}
    />
    <UserTable
      privateRooms={privateRooms}
      focusedRoomId={focusedRoomId}
    />
  </div>
);

Sidebar.propTypes = {
  publicRooms: React.PropTypes.arrayOf(DryChannelPropType).isRequired,
  privateRooms: React.PropTypes.arrayOf(DryChannelPropType).isRequired,
  focusedRoomId: React.PropTypes.string,
  loggedUserId: React.PropTypes.string,
};

export default Sidebar;
