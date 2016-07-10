import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Home, Channel, Message } from 'app/components/container';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <Route path=":roomName" component={Channel}>
        <Route path=":messageId" component={Message} />
      </Route>
    </Route>
  </Router>
);
