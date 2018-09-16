// External dependencies
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Routes
import { UserRoute } from '../../routes';

// Components
import Login from '../../containers/Login';
import Search from '../Search';
import TrackInfo from '../TrackInfo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <UserRoute
            path="/track/:trackid"
            component={TrackInfo}
          />
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
