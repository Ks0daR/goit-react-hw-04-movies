import React, { Component } from 'react';
import { getMovieReviews } from '../utils/movieApi';
import Rewiew from '../components/Rewiew';
import Error from '../components/Error';
import Loader from '../components/Loader';

class MovieDetailsPageReview extends Component {
  state = {
    filmReview: '',
    loading: false,
    error: '',
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;
    getMovieReviews(movieId).then(filmReview => this.setState({ filmReview }));
  }
  render() {
    const { filmReview, error, loading } = this.state;
    return (
      <>
        {error && <Error />}
        {loading && <Loader />}
        {filmReview ? (
          <Rewiew results={filmReview.results} />
        ) : (
          <p>Comments not found</p>
        )}
      </>
    );
  }
}

export default MovieDetailsPageReview;
