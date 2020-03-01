import React, { Component } from 'react';
import { getMovieReviews } from '../utils/movieApi';

class MovieDetailsPageReview extends Component {
  state = {
    filmReview: '',
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;
    getMovieReviews(movieId).then(console.log);
  }
  render() {
    return <div>Hello world</div>;
  }
}

export default MovieDetailsPageReview;
