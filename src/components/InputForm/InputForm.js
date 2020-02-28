import React, { Component } from 'react';

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
      <form onSubmit={this.handleSerchSubmit}>
        <input onChange={this.handleInput} placeholder="Input film name..." />
        <button type="submit">Find Film</button>
      </form>
    )
  }
}

export default InputForm;
