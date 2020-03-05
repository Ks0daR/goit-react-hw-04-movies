import React, { Component } from 'react';
import InputForm from '../components/InputForm';
import MovieList from '../components/MovieList';
import PaginationBar from '../components/PaginationBar';
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

  componentDidMount() {
    const { query, page } = queryString(this.props.location.search);
    if (query !== null && query !== undefined) {
      this.setState({ loading: true });
      this.getFetchOnQuery(query, page);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = queryString(this.props.location.search);
    const oldQuery = prevProps.location.search;
    const newQuery = this.props.location.search;
    if (oldQuery !== newQuery && newQuery !== null) {
      this.setState({ loading: true });
      this.getFetchOnQuery(query, page);
      return;
    }
  }
  getFetchOnQuery(query, page) {
    return getFilmsByQuery(query, page)
      .then(data => this.setState({ filmsListByQuery: data }))
      .catch(error => this.setState({ error }));
  }

  getNewSearchQuery = value => {
    this.props.history.push({
      pathname: this.props.location.pahtname,
      search: `query=${value}`,
    });
  };

  getNewPageNumber = pageNumber => {
    const { query } = queryString(this.props.location.search);
    this.props.history.push({
      pathname: this.props.location.pahtname,
      search: `query=${query}&page=${pageNumber}`,
    });
  };

  render() {
    const { results, total_pages } = this.state.filmsListByQuery;
    console.log(total_pages);
    const MovieListWithRouter = withRouter(MovieList);
    const { error, loading } = this.state;
    return (
      <>
        {error && <Error />}
        {loading && <Loader />}
        <InputForm onSubmit={this.getNewSearchQuery} />
        {results && (
          <>
            <MovieListWithRouter collectionMovies={results} />
            <PaginationBar
              quantityButtons={total_pages}
              getNumber={this.getNewPageNumber}
            />
          </>
        )}
      </>
    );
  }
}

export default MoviesPage;
