// External dependencies
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Routes
import { UserRoute } from '../../routes';

// Components
import Login from '../../containers/Login';
import Search from '../../containers/Search';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <UserRoute
            path="/Search"
            component={Search}
          />
          <Route
            path="/"
            component={Login}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
