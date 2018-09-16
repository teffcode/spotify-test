// External libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Config
import config from '../../config';

// Utils
import { headerUtils } from '../../utils';

// Actions
import { fetchUserSelf } from '../../actions';

class Login extends Component {
  // Life cycle methods
  componentDidMount() {
    const { location, fetchUserSelf, history } = this.props;

    if (location.search) {
      const accessToken = location.search.split('=')[1]
      // Set jwt token in the local storage
      localStorage.accessToken = accessToken;
      // Set authorization header
      headerUtils.authorizationHeader(accessToken);

      // Dispatch action to fetch user self
      fetchUserSelf()
        .then(() => {
          history.push('/search');
        });
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to the spotify app</h2>
        <a href={`${config.API_URL}/login`}>Login</a>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object,
  fetchUserSelf: PropTypes.func,
}

export default connect(null, { fetchUserSelf })(Login);
