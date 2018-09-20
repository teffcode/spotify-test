// External libraries
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserRoute = ({ isAuthenticated, component:Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render = {props =>
        isAuthenticated
          ? <Component {...props} />
          : null
      }
    />
  );
}

UserRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
}
export default UserRoute;