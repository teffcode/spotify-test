// External libraries
import axios from 'axios';

const authorizationHeader = (token = null) => {
  if (token) {
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
}

export default {
  authorizationHeader,
};

