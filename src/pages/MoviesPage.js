import React, { Component } from 'react';
import InputForm from '../components/InputForm';
import MovieList from '../components/MovieList';
import { withRouter } from 'react-router-dom';
import { getFilmsByQuery } from '../utils/movieApi';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    filmsListByQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const oldQuery = prevState.searchQuery;
    const newQuery = this.state.searchQuery;
    if (oldQuery !== newQuery) {
      getFilmsByQuery(newQuery).then(data =>
        this.setState({ filmsListByQuery: data }),
      );
      return;
    }
  }
  getNewSearchQuery = value => {
    this.setState({ searchQuery: value });
  };

  render() {
    const { results } = this.state.filmsListByQuery;
    const MovieListWithRouter = withRouter(MovieList);
    return (
      <>
        <InputForm onSubmit={this.getNewSearchQuery} />
        {results && <MovieListWithRouter collectionMovies={results} />}
      </>
    );
  }
}

export default MoviesPage;
