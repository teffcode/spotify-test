// Environment variables
export default (function() {
  let API_URL = '';
  let API_SPOTIFY_URL = ''
  switch(process.env.REACT_APP_ENV) {
    case 'production':
      API_URL = 'http://api-app.co';
      API_SPOTIFY_URL = 'https://api.spotify.com/v1';
      break;
    case 'develop':
      API_URL = 'http://api-app.com';
      API_SPOTIFY_URL = 'https://api.spotify.com/v1';
      break;
    default:
      API_URL = 'http://localhost:41000';
      API_SPOTIFY_URL = 'https://api.spotify.com/v1';
    break;
  }
  return {
    API_URL,
    API_SPOTIFY_URL,
  }
})();
