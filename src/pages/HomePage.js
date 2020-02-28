import React, { Component } from 'react';
import MovieList from '../components/MovieList';
import { withRouter } from 'react-router-dom';
import { getPopularityFilms } from '../utils/movieApi';

class HomePage extends Component {
  state = {
    popularFilms: '',
  };

  componentDidMount() {
    getPopularityFilms().then(popularFilms => this.setState({ popularFilms }));
  }

  render() {
    const MovieListWithRouter = withRouter(MovieList);
    const { results } = this.state.popularFilms;

    return <>{results && <MovieListWithRouter collectionMovies={results} />}</>;
  }
}

export default HomePage;
