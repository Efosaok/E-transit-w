import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthPage from '../../features/authentication/scenes/AuthPage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={AuthPage} />
    </Switch>
  </main>
);

export default Main;
