// External libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Config
import config from '../../config';

// Styles
import './TrackInfo.scss';

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
    let backgraundStyle;

    if (albumCover && albumCover !== '') {
      backgraundStyle = {
        background:`linear-gradient(to top, #161827,  transparent), url(${albumCover})`
      }
    }

    return(
      <div className="track">
        {
          backgraundStyle ? <div style={backgraundStyle} className="track-background"></div> : null 
        }
        <div className="track-info">
          <img src={albumCover} alt="album-cover" height="300" width="300" />
          <h1>{artist}</h1>
          <span>Song: {nameSong}</span>
          <span>Duration: {`${Math.round((duration/1000)/60)} Minutos`}</span>
          <Link to="/search">Regresar</Link>
        </div>
      </div>
    );
  }
}

TrackInfo.propTypes = {
  match: PropTypes.object.isRequired,
}

export default TrackInfo;
