import React from 'react';

const Loading = ({ hiddenSideBar }) => (
  <div className="cssload-container">
    <div className={`side-bar loading-side-bar ${hiddenSideBar === true ? 'hidden' : ''}`} />
    <div className="cssload-whirlpool" />
  </div>
);

Loading.propTypes = {
  hiddenSideBar: React.PropTypes.bool,
};

export default Loading;
