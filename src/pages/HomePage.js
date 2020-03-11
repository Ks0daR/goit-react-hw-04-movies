import React, { Component } from 'react';
import MovieList from '../components/MovieList';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { withRouter } from 'react-router-dom';
import { getPopularityFilms } from '../utils/movieApi';

const MovieListWithRouter = withRouter(MovieList);

class HomePage extends Component {
  state = {
    popularFilms: '',
    error: '',
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    getPopularityFilms()
      .then(popularFilms => this.setState({ popularFilms }))
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const { results } = this.state.popularFilms;
    const { error, loading } = this.state;

    return (
      <>
        {loading && <Loader />}
        {error && <Error />}
        {results && <MovieListWithRouter collectionMovies={results} />}
      </>
    );
  }
}

export default HomePage;
