import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './Layout';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import MovieDetailsPageRewiew from '../pages/MovieDetailsPageReview';
import MovieDetailsPageCredits from '../pages/MovieDetailsPageCredits';
import routes from '../routes';

const App = () => (
  <Layout>
    <Navigation />
    <hr />
    <Switch>
      <Route exact path={routes.HomePage} component={HomePage} />
      <Route path={routes.MovieDetailsPage} component={MovieDetailsPage} />
      <Route path={routes.MoviesPage} component={MoviesPage} />
      <Route path={routes.Reviews} component={MovieDetailsPageRewiew} />
      <Route path={routes.Cast} component={MovieDetailsPageCredits} />
      <Redirect to={routes.HomePage} />
    </Switch>
  </Layout>
);

export default App;
