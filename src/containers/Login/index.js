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

// Styles
import './Login.scss';

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

  renderAnimation() {
    const hearts = new Array(200).fill({})

    return (
      hearts.map((element, index) => {
        const style = {
          left: Math.floor((Math.random() * (window.innerWidth - 0))) + "px",
          animationDelay: Math.floor((Math.random() * (80000 - 0))) + "ms"
        }
        return(
          <div className="points" key={index} style={style}></div>
        );
      })
    );
  }  


  render() {
    return (
      <div className="login">
        <div className="login-body">
          <h1>Spotify Search</h1>  
          <a href={`${config.API_URL}/login`}>Login to Spotify</a>
        </div>            
        <div className="login-animation">
          { this.renderAnimation() }
        </div>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    isAuthenticated: !!user.email,
  }
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object,
  fetchUserSelf: PropTypes.func,
}

export default connect(mapStateToProps, { fetchUserSelf })(Login);
