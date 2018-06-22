import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../containers/header/Header';

const Main = props => (
  <main>
    <Switch>
      <Route exact path="/" component={Header} />
    </Switch>
  </main>
);

export default Main;
