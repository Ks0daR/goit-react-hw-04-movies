import React from 'react';
import styles from './PaginationBar.module.css';
import PropTypes from 'prop-types';

function PaginationBar({ quantityButtons, getNumber }) {
  let buttonsArray = [];
  for (let i = 1; i <= quantityButtons; i += 1) {
    buttonsArray.push(
      <button className={styles.Button} key={i} onClick={() => getNumber(i)}>
        {i}
      </button>,
    );
  }
  return <div className={styles.ButtonList}>{buttonsArray}</div>;
}

PaginationBar.propTypes = {
  quantityButtons: PropTypes.number.isRequired,
  getNumber: PropTypes.func.isRequired,
};

export default PaginationBar;
