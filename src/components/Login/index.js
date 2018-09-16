// External libraries
import React from 'react';

// Config
import config from '../../config';

const Login = () => {
  return (
    <div>
      <h2>Welcome to the spotify app</h2>
      <a href={`${config.API_URL}/login`}>Login</a>
    </div>
  );
};

export default Login;
