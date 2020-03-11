import React from 'react';
import PropTypes from 'prop-types';
import { imgUrl, errorImg } from '../../constants';
import styles from './CreditsItem.module.css';

const CreditsItem = ({ character, name, gender, profile }) => (
  <li className={styles.ListItem}>
    <h5>{character}</h5>
    <h6>{name}</h6>
    <p>{gender === 1 ? 'female' : 'male'}</p>
    {profile ? (
      <img src={`${imgUrl}${profile}`} alt={name} />
    ) : (
      <img src={errorImg} alt={name} />
    )}
  </li>
);

CreditsItem.defaultProps = {
  profile: errorImg,
};

CreditsItem.propTypes = {
  character: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.number.isRequired,
};

export default CreditsItem;
