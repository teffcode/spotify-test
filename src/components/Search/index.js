// External libraries
import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import PropTypes from 'prop-types';

// Config
import config from '../../config';

// Components
import SearchBar from '../SearchBar';
import TracksTable from '../TracksTable';

// Styles
import './Search.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
    };
  }

  // Methods
  searchTerm = (term) => {
    axios.get(`${config.API_SPOTIFY_URL}/search?q=${term}&type=track&limit=10`)
      .then((res) => {
        if (res.data.tracks.items.length > 0) {
          this.setState((prevState) => {
            return {
              ...prevState,
              tracks: res.data.tracks.items,
            }
          });
        }
      })
      .catch(() => {
        this.setState((prevState) => {
          return {
            ...prevState,
            tracks: [],
          }
        });
      });
  }

  render() {
    const { tracks } = this.state;
    const { history } = this.props;
    const searchData = _.debounce((term) => this.searchTerm(term), 300);
  
    return(
      <div className="search">
        <div className="search-header"></div>
        <h1>• Search •</h1>
        <SearchBar onSearchTerm={searchData}/>
        {
          tracks.length > 0 
            ? <TracksTable history={history} tracks={tracks} />
            : null
        }
      </div>
    );
  }
}

Search.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired
}

export default Search;
