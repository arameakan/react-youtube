import React, { Component } from "react";
import "../styles/style.css";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onInputChange = term => {
    this.setState(() => ({ term }));
    this.props.onSearchTermChange(term);
  };

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          name=""
          onChange={e => this.onInputChange(e.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
