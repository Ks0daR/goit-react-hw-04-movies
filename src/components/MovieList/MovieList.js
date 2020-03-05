import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './MovieList.module.css';
import PropTypes from 'prop-types';

class MovieList extends Component {
  static propTypes = {
    collectionMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    return (
      <ul className={styles.List}>
        {this.props.collectionMovies.map(result => (
          <li key={result.id} className={styles.ListItem}>
            <NavLink
              className={styles.ListLink}
              to={`${routes.MoviesPage}/${result.id}`}
            >
              {/* если сделать через this.props.match.url возникает проблема со / при переходе со страницы Home */}
              <h5>{result.title}</h5>
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }
}
export default MovieList;
