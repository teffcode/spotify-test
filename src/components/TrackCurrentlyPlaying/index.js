// External libraries
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Config
import config from '../../config';

// Styles
import './TrackCurrentlyPlaying.scss';

class TrackCurrentlyPlating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '', 
      artist: '',
      nameSong: '',
      duration: '',
      albumCover: '',
      playingSong: false,
      error: '',
    }
  }
  // Life cycle methods
  componentDidMount() {
    axios.get(`${config.API_SPOTIFY_URL}/me/player/currently-playing`)
      .then((res) => {
        if (!res.data || res.data === '') {
          this.setState((prevState) => {
            return {
              ...prevState,
              message: 'User is not playing a song',
              playingSong: false,
            }
          });
        } else {
          this.setState((prevState) => {
            return {
              ...prevState,
              id: res.data.item.id,
              artist: res.data.item.artists[0].name,
              nameSong:res.data.item.name,
              albumCover: res.data.item.album.images[0].url,
              duration: res.data.item.duration_ms,
              playingSong: true,
            }
          })
        }
      })
  }
  render() {
    const { artist, nameSong, duration, albumCover, playingSong } = this.state;
    let backgraundStyle;

    if (albumCover && albumCover !== '') {
      backgraundStyle = {
        background:`linear-gradient(to top, #161827,  transparent), url(${albumCover})`
      }
    }

    if (!playingSong) {
      return (
        <div className="track">
          <h2 style={{ color: "white" }}>The user currently is not playing a song</h2>
        </div>
      );
    }

    return (
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

export default TrackCurrentlyPlating;
