// External libraries
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render = {props =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

// Props validation
GuestRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default GuestRoute;
