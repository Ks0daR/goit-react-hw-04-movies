import React from 'react';
import PropTypes from 'prop-types';
import routes from '../../../routes';
import { NavLink } from 'react-router-dom';
import styles from './MovieListItem.module.css';

const MovieListItem = ({ id, title }) => (
  <li className={styles.ListItem}>
    <NavLink to={`${routes.MoviesPage}/${id}`}>
      <h5>{title}</h5>
    </NavLink>
  </li>
);

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieListItem;
