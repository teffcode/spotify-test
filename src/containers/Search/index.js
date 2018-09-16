// External libraries
import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      term: '',
    };
  }
  // Life cycle methods
  render() {
    return(
      <div>
        <h2>Search something</h2>
      </div>
    );
  }
}

export default Search;
