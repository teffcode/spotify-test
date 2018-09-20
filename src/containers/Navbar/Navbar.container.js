import { connect } from 'react-redux';

import { logoutUser } from '../../actions';
import Navbar from './Navbar';

export function mapStateToProps({ user }) {
    return {
      displayName: user.displayName,
    }
}

export default connect(mapStateToProps, { logoutUser })(Navbar);

