// External dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';

// Routes
import { UserRoute } from '../../routes';

// Components
import Login from '../Login';
import Search from '../Search';
import TrackInfo from '../../components/TrackInfo';
import TrackCurrentPlaying from '../../components/TrackCurrentlyPlaying';

class App extends Component {
  render() {
    const { isAuthenticated, history } = this.props;

    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route
            path="/"
            exact
            component={Login}
          />
          <UserRoute
            path="/Search"
            component={Search}
            isAuthenticated={isAuthenticated}
          />
          <UserRoute
            path="/track/:trackid"
            component={TrackInfo}
            isAuthenticated={isAuthenticated}
          />
          <UserRoute
            path="/user/track/current"
            component={TrackCurrentPlaying}
            isAuthenticated={isAuthenticated}
          />
        </Switch>
      </ConnectedRouter>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    isAuthenticated: !!user.email,
  }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool,
  history: PropTypes.object,
}

export default connect(mapStateToProps)(App);
