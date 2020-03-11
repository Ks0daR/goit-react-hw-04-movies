import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { imgUrl } from '../constants';
import styles from './MovieDetails.module.css';
import PropTypes from 'prop-types';

class MovieDetails extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const { title, poster_path, release_date, genres } = this.props;

    return (
      <div className={styles.Container}>
        <h4 className={styles.Title}>{title}</h4>
        <img src={`${imgUrl}${poster_path}`} alt={title} />
        <p>{release_date}</p>
        {genres.map(genre => (
          <span key={genre.name}>{genre.name} </span>
        ))}
        <br />
        <Link to={`${this.props.match.url}/reviews`}>
          <Button name={'Reviews'} />
        </Link>
        <Link to={`${this.props.match.url}/cast`}>
          <Button name={'Cast'} />
        </Link>
      </div>
    );
  }
}

export default MovieDetails;
