// External libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './SearchBar.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
    }
  }
  // Methods
  onInputChange = (term) => {
    const { term: termState } = this.state;
    const { onSearchTerm } = this.props;

    this.setState((prevState) => {
      return {
        ...prevState,
        term,
      }
    });
    
    if (termState.length > 0 ) {
      onSearchTerm(term);
    }
  }

  render() {
    return(
      <div className="search-bar">
        <input
          placeholder = "Search"
          value = { this.state.term } 
          onChange = { event => this.onInputChange(event.target.value) } />
      </div>
    )
  }
}

SearchBar.propTypes = {
  onSearchTerm: PropTypes.func.isRequired,
}

export default SearchBar;
