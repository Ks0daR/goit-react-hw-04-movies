import React, { Component } from 'react';
import InputForm from '../components/InputForm';
import MovieList from '../components/MovieList';
import Error from '../components/Error';
import Loader from '../components/Loader';
import { withRouter } from 'react-router-dom';
import { getFilmsByQuery } from '../utils/movieApi';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    filmsListByQuery: '',
    error: '',
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const oldQuery = prevState.searchQuery;
    const newQuery = this.state.searchQuery;
    if (oldQuery !== newQuery) {
      this.setState({ loading: true });
      getFilmsByQuery(newQuery)
        .then(data => this.setState({ filmsListByQuery: data }))
        .catch(error => this.setState({ error }));

      return;
    }
  }
  getNewSearchQuery = value => {
    this.setState({ searchQuery: value });
  };

  render() {
    const { results } = this.state.filmsListByQuery;
    const MovieListWithRouter = withRouter(MovieList);
    const { error, loading } = this.state;
    return (
      <>
        {error && <Error />}
        {loading && <Loader />}
        <InputForm onSubmit={this.getNewSearchQuery} />
        {results && <MovieListWithRouter collectionMovies={results} />}
      </>
    );
  }
}

export default MoviesPage;
