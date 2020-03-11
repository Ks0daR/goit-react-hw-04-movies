import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';
import MovieDetailsPageReview from '../pages/MovieDetailsPageReview';
import MovieDetailsPageCredits from '../pages/MovieDetailsPageCredits';
import Error from '../components/Error';
import Loader from '../components/Loader';
import routes from '../routes';
import { getFilmById } from '../utils/movieApi';

const MovieDetailsWithRouter = withRouter(MovieDetails);

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
      .then(filmData => this.setState({ filmData }))
      .catch(error => this.setState({ error }));
  }
  render() {
    const { loading, error, filmData } = this.state;
    const { title, poster_path, release_date, genres } = this.state.filmData;
    return (
      <>
        {error && <Error />}
        {loading && <Loader />}
        {filmData && (
          <MovieDetailsWithRouter
            title={title}
            poster_path={poster_path}
            release_date={release_date}
            genres={genres}
          />
        )}

        <Route path={routes.Cast} component={MovieDetailsPageCredits} />
        <Route path={routes.Reviews} component={MovieDetailsPageReview} />
      </>
    );
  }
}

export default MovieDetailsPage;
