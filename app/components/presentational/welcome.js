import React from 'react';

const Welcome = ({ loggedUserName }) => (
  <div className="home-page">
    <h1>Welcome {loggedUserName}!</h1>
    <p>You can join a chat room by clicking on an entry on the left sidebar.</p>
  </div>
);

Welcome.propTypes = {
  loggedUserName: React.PropTypes.string.isRequired,
};

export default Welcome;
