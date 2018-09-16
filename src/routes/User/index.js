// External libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

class UserRoute extends Component {
  render() {
    const { isAuthenticated, component:Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render = {props =>
          isAuthenticated
            ? <Component {...props} />
            : <Redirect to="/"/>
        }
      />
    );
  }
}

function mapStateToProps ({ user }) {
  return {
    isAuthenticated: !!user.email,
  }
}

UserRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.object,
}
export default connect(mapStateToProps)(UserRoute);