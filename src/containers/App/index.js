// External dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Routes
import { UserRoute, GuestRoute } from '../../routes';

// Components
import Login from '../../components/Login';
import Search from '../../components/Search';

class App extends Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <UserRoute
            path="/Search"
            isAuthenticated={isAuthenticated}
            component={Search}
          />
          <GuestRoute
            path="/"
            isAuthenticated={isAuthenticated}
            component={Login}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    isAuthenticated: !!user.email,
  }
}

// Props validation
App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
