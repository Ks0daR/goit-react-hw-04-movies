import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './Layout';
import routes from '../routes';
import {
  AsyncHomePage,
  AsyncMoviesPage,
  AsyncMovieDetailsPage,
} from './constants';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path={routes.HomePage} component={AsyncHomePage} />
      <Route path={routes.MovieDetailsPage} component={AsyncMovieDetailsPage} />
      <Route path={routes.MoviesPage} component={AsyncMoviesPage} />
      <Redirect to={routes.HomePage} />
    </Switch>
  </Layout>
);

export default App;
