import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';
import MovieDetailsPageReview from '../pages/MovieDetailsPageReview';
import MovieDetailsPageCredits from '../pages/MovieDetailsPageCredits';

import Error from '../components/Error';
import Loader from '../components/Loader';
import routes from '../routes';
import { getFilmById } from '../utils/movieApi';
import queryParams from '../utils/queryStringPharse';

class MovieDetailsPage extends Component {
  state = {
    filmData: '',
    error: '',
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    const { movieId } = this.props.match.params;
    getFilmById(movieId)
      .then(data => this.setState({ filmData: data }))
      .catch(error => this.setState({ error }));
  }
  render() {
    const MovieDetailsWithRouter = withRouter(MovieDetails);
    const { loading, error, filmData } = this.state;
    return (
      <>
        {error && <Error />}
        {loading && <Loader />}
        {filmData && <MovieDetailsWithRouter movie={this.state.filmData} />}

        <Route path={routes.Cast} component={MovieDetailsPageCredits} />
        <Route path={routes.Reviews} component={MovieDetailsPageReview} />
      </>
    );
  }
}

export default MovieDetailsPage;
