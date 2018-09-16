// External libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Config
import config from '../../config';

class TrackInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '', 
      artist: '',
      nameSong: '',
      duration: '',
      albumCover: '',
    }
  }
  // Life cycle methods
  componentDidMount() {
    const { match } = this.props;
    axios.get(`${config.API_SPOTIFY_URL}/tracks/${match.params.trackid}`)
      .then((res) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            id: res.data.id,
            artist: res.data.artists[0].name,
            nameSong:res.data.name,
            albumCover: res.data.album.images[0].url,
            duration: res.data.duration_ms,
          }
        })
      })
  }
  render() {
    const { artist, nameSong, duration, albumCover } = this.state;

    return(
      <div>
        <h2>Track info</h2>
        <div>
          <img src={albumCover} alt="album-cover" height="300" width="300" />
          <span>Artist: {artist}</span>
          <span>Song: {nameSong}</span>
          <span>Duration: {`${duration/1000}segundos`}</span>
        </div>
        <Link to="/search">Regresar</Link>
      </div>
    );
  }
}

TrackInfo.propTypes = {
  match: PropTypes.object.isRequired,
}

export default TrackInfo;
