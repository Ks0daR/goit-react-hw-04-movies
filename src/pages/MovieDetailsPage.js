import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import MovieDetailsPageReview from '../pages/MovieDetailsPageReview';
import MovieDetailsPageCredits from '../pages/MovieDetailsPageCredits';
import Button from '../components/Button';
import Error from '../components/Error';
import Loader from '../components/Loader';
import routes from '../routes';
import { getFilmById } from '../utils/movieApi';

class MovieDetailsPage extends Component {
  state = {
    filmData: '',
    error: '',
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    const { movieId } = this.props.match.params;
    console.log(movieId);
    getFilmById(movieId)
      .then(data => this.setState({ filmData: data }))
      .catch(error => this.setState({ error }))
  }
  render() {
    const imgUrl = 'https://image.tmdb.org/t/p/w200/';
    const { loading, error } = this.state;
    const { title, poster_path, release_date, genres } = this.state.filmData;
    return (
      <>
        {error && <Error />}
        {loading && <Loader />}
        {title && (
          <div>
            <h4>{title}</h4>
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
        )}

        <Route path={routes.Cast} component={MovieDetailsPageCredits} />
        <Route path={routes.Reviews} component={MovieDetailsPageReview} />
      </>
    );
  }
}

export default MovieDetailsPage;
