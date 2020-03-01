import React from 'react';

function Credits({ filmCreditsList }) {
  const imgUrl = 'https://image.tmdb.org/t/p/w200/';
  return (
    <ul>
      {filmCreditsList.map(
        ({ cast_id, character, name, gender, profile_path }) => (
          <li key={cast_id}>
            <h5>{character}</h5>
            <h6>{name}</h6>
            <p>{gender === 1 ? 'female' : 'male'}</p>
            <img src={`${imgUrl}${profile_path}`} alt={name} />
          </li>
        ),
      )}
      ;
    </ul>
  );
}

export default Credits;
