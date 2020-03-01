import React, { Component } from 'react';
import styles from './InputForm.module.css';

class InputForm extends Component {
  state = {
    searchQuery: '',
  };

  handleInput = ({ target: { value } }) => {
    this.setState({ searchQuery: value });
  };

  handleSerchSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <form className={styles.SearchForm} onSubmit={this.handleSerchSubmit}>
        <input className={styles.SearchInput} onChange={this.handleInput} placeholder="Input film name..." />
        <button className={styles.SearchButton} type="submit">Find Film</button>
      </form>
    );
  }
}

export default InputForm;
