import React from 'react';
import CreditsItem from './CreditsItem';
import styles from './Credits.module.css';
import PropTypes from 'prop-types';

function Credits({ filmCreditsList }) {
  return (
    <ul className={styles.List}>
      {filmCreditsList.map(
        ({ cast_id, character, name, gender, profile_path }) => (
          <CreditsItem
            key={cast_id}
            id={cast_id}
            character={character}
            name={name}
            gender={gender}
            profile={profile_path}
          />
        ),
      )}
    </ul>
  );
}

Credits.propTypes = {
  filmCreditsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Credits;
