// External libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
import './Navbar.scss';

import { logoutUser } from '../../actions';

class Navbar extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    const { history, logoutUser } = this.props;
    // Dispatch action logout
    logoutUser();
    // Redirect to /
    history.push('/');
  }
  render() {
    const { displayName } = this.props;

    return(
      <nav className="navbar">
        <li>
          <i className="fas fa-music"></i>
          {(displayName) ? displayName : ''}
        </li>
        <ul>
          <Link to="/search"><li>Search</li></Link>
          <Link to="/user/track/current"><li>Current Song</li></Link>
          <li onClick={this.handleLogout}>Logout</li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    displayName: user.displayName,
  }
}

Navbar.propTypes = {
  displayName: PropTypes.string.isRequired,
  logoutUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default connect(mapStateToProps, { logoutUser })(Navbar);
