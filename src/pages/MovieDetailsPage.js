import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import routes from '../routes';
import { getFilmById } from '../utils/movieApi';

class MovieDetailsPage extends Component {
  state = {
    filmData: '',
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;
    console.log(movieId);
    getFilmById(movieId).then(data => this.setState({ filmData: data }));
  }
  render() {
    const imgUrl = 'https://image.tmdb.org/t/p/w200/';
    const { title, poster_path, release_date, genres } = this.state.filmData;
    return (
      <>
        {title && (
          <div>
            <h4>{title}</h4>
            <img src={`${imgUrl}${poster_path}`} alt={title} />
            <p>{release_date}</p>
            {genres.map(genre => (
              <span>{genre.name} </span>
            ))}
            <br />
            <Link to={routes.Reviews}><Button name={'Reviews'} /></Link>
            <Link to={routes.Cast}><Button name={'Cast'} /></Link>
          </div>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
