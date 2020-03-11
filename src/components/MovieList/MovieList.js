import React, { Component } from 'react';
import MovieListItem from './MovieListItem';

import styles from './MovieList.module.css';
import PropTypes from 'prop-types';

class MovieList extends Component {
  static propTypes = {
    collectionMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    return (
      <ul className={styles.List}>
        {this.props.collectionMovies.map(({ id, title }) => (
          <MovieListItem key={id} id={id} title={title} />
        ))}
      </ul>
    );
  }
}
export default MovieList;
