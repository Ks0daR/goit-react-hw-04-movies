import React, { Component } from 'react';
import { getMovieCredits } from '../utils/movieApi';
import Credits from '../components/Credits';
import Error from '../components/Error';
import Loader from '../components/Loader';

class MovieDetailsPageCredits extends Component {
  state = {
    filmCredits: '',
    loading: false,
    error: '',
  };
  componentDidMount() {
    this.setState({ loading: true });
    const { movieId } = this.props.match.params;
    getMovieCredits(movieId)
      .then(filmCredits => this.setState({ filmCredits }))
      .catch(error => this.setState({ error }));
  }
  render() {
    const { cast } = this.state.filmCredits;
    const { error, loading } = this.state;
    return (
      <>
        {error && <Error />}
        {loading && <Loader />}
        {cast && <Credits filmCreditsList={cast} />}
      </>
    );
  }
}

export default MovieDetailsPageCredits;
