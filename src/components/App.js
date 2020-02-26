import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import routes from '../routes';

const App = () => (
  <Layout>
    <Navigation />
    <hr />
    <Switch>
      <Route exact path={routes.HomePage} component={HomePage} />
      <Route path={routes.MoviesPage} component={MoviesPage} />
    </Switch>
  </Layout>
);

export default App;
