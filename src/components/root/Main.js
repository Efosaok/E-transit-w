import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthPage from '../../features/authentication/scenes/AuthPage';
import MapPage from '../../features/map/views/MapPage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={AuthPage} />
      <Route exact path="/signin" component={AuthPage} />
      <Route exact path="/dashboard" component={MapPage} />
    </Switch>
  </main>
);

export default Main;
