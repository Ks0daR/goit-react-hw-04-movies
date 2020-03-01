import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

class MovieList extends Component {
  render() {
    console.log(this.props.match.url);
    return (
      <ul>
        {this.props.collectionMovies.map(result => (
          <li key={result.id}>
            <NavLink to={`${routes.MoviesPage}/${result.id}`}> 
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
