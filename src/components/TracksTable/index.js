// External libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// Styles
import './TracksTable.scss';

class TracksTable extends Component {
  handleClick = (e, trackId) => {
    const { history } = this.props;
    e.preventDefault();
    history.push(`track/${trackId}`);
  }
  render() {
    const { tracks } = this.props;

    return (
      <div className="tracks-table">
        <table>
          <thead>
            <tr>
              <th>Artist</th>
              <th>Track</th>
              <th>Album</th>
            </tr>
          </thead>
          <tbody>
            {
              _.map(tracks, (track) => {
                return (
                  <tr className="row" onClick={(e) => this.handleClick(e, track.id)} key={track.id}>
                    <td>{track.artists[0].name}</td>
                    <td>{track.name}</td>
                    <td>{track.album.name}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

TracksTable.propTypes = {
  tracks: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired
}

export default TracksTable;