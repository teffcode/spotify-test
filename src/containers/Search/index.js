// External libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

// Actions
import { fetchTracks } from '../../actions';

// Components
import SearchBar from '../../components/SearchBar';
import TracksTable from '../../components/TracksTable';

// Styles
import './Search.scss';

class Search extends Component {
  // Methods
  searchTerm = (term) => {
    const { fetchTracks } = this.props;
    // Dispatch action
    fetchTracks(term);
  }

  render() {
    const { history, tracks } = this.props;
    const searchData = _.debounce((term) => this.searchTerm(term), 300);
  
    return(
      <div className="search">
        <div className="search-header"></div>
        <div className="search-content">
          <h1>• Search •</h1>
          <SearchBar onSearchTerm={searchData}/>
          {
            Object.keys(tracks).length > 0 
            ? <TracksTable history={history} tracks={tracks} />
            : null
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps({ tracks }) {
  return {
    tracks, 
  }
}

Search.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  tracks: PropTypes.object.isRequired,
  fetchTracks: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { fetchTracks })(Search);
