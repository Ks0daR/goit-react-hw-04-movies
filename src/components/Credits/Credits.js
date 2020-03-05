import React from 'react';
import styles from './Credits.module.css';
import PropTypes from 'prop-types';

function Credits({ filmCreditsList }) {
  const imgUrl = 'https://image.tmdb.org/t/p/w200/';
  return (
    <ul className={styles.List}>
      {filmCreditsList.map(
        ({ cast_id, character, name, gender, profile_path }) => (
          <li className={styles.ListItem} key={cast_id}>
            <h5>{character}</h5>
            <h6>{name}</h6>
            <p>{gender === 1 ? 'female' : 'male'}</p>
            {profile_path ? (
              <img src={`${imgUrl}${profile_path}`} alt={name} />
            ) : (
              <img
                src={
                  'http://chto-takoe-lyubov.net/wp-content/uploads/2017/08/voprositelnyy-znak-stikhi.jpg'
                }
                alt={name}
              />
            )}
          </li>
        ),
      )}
      ;
    </ul>
  );
}

Credits.propTypes = {
  filmCreditsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Credits;
