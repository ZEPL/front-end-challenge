import React from 'react';
import { connect } from 'react-redux';
import fp from 'lodash/fp';
import Api from 'app/api';
import store from 'app/store';
import Actions from 'app/actions';
import { SessionPropType, EmptyObjectPropType } from 'app/components/prop-types';
import { Welcome, Loading, Sidebar } from 'app/components/presentational';

class Home extends React.Component {
  componentDidMount() {
    document.title = 'Slack Clone';

    Api.Get.restoreSession().then((session) => {
      store.dispatch(Actions.Session.restoreSessionSuccess(session));
    });
  }

  renderLoading() {
    return (<Loading />);
  }

  renderWelcome() {
    return (<div>
      <Sidebar
        publicRooms={this.props.session.joinedChannels.public}
        privateRooms={this.props.session.joinedChannels.private}
        loggedUserId={this.props.session.loggedUser.guid}
      />
      <Welcome loggedUserName={this.props.session.loggedUser.name} />
    </div>);
  }

  renderChildren() {
    return (<div>{this.props.children}</div>);
  }

  render() {
    if (fp.isEmpty(this.props.session)) {
      return this.renderLoading();
    } else if (this.props.children == null) {
      return this.renderWelcome();
    }
    return this.renderChildren();
  }
}

Home.propTypes = {
  children: React.PropTypes.node,
  session: React.PropTypes.oneOfType([
    SessionPropType,
    EmptyObjectPropType,
  ]),
};

const mapStateToProps = (state) => ({
  session: state.sessionState.toJS(),
});

export default connect(mapStateToProps)(Home);
