import React, { Component } from 'react';
import styles from './InputForm.module.css';
import PropTypes from 'prop-types';

class InputForm extends Component {
  state = {
    inputValue: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleInput = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  };

  handleSerchSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <form className={styles.SearchForm} onSubmit={this.handleSerchSubmit}>
        <input
          className={styles.SearchInput}
          onChange={this.handleInput}
          value={inputValue}
          placeholder="Input film name..."
        />
        <button className={styles.SearchButton} type="submit">
          Find Film
        </button>
      </form>
    );
  }
}

export default InputForm;
