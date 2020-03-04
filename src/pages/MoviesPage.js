import React, { Component } from 'react';
import InputForm from '../components/InputForm';
import MovieList from '../components/MovieList';
import Error from '../components/Error';
import Loader from '../components/Loader';
import { withRouter } from 'react-router-dom';
import { getFilmsByQuery } from '../utils/movieApi';
import queryString from '../utils/queryStringPharse';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    filmsListByQuery: '',
    error: '',
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const queryParams = queryString(this.props.location.search);
    const oldQuery = prevProps.location.search;
    const newQuery = this.props.location.search;
    if (oldQuery !== newQuery) {
      console.log(queryParams.query);
      this.setState({ loading: true });
      getFilmsByQuery(queryParams.query)
        .then(data => this.setState({ filmsListByQuery: data }))
        .catch(error => this.setState({ error }));

      return;
    }
  }
  getNewSearchQuery = value => {
    // this.setState({ searchQuery: value });
    this.props.history.push({
      pathname: this.props.location.pahtname,
      search: `query=${value}`,
    });
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
