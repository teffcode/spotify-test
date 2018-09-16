// External libraries
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render = {props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

function mapStateToProps ({ user }) {
  return {
    isAuthenticated: !!user.email,
  };
}

// Props validation
UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(UserRoute);