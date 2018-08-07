import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onInputChange = e => {
    const { value } = e.target;
    this.setState(() => ({ term: value }));
  };

  handlePrintState = e => {
    e.preventDefault();
    console.log(this.state.term);
  };

  render() {
    return (
      <div>
        <input type="text" name="" onChange={this.onInputChange} />
        <button onClick={this.handlePrintState}>Add</button>
      </div>
    );
  }
}

export default SearchBar;
