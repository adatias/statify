import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { Outlet, Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { getTokenFromUrl } from './spotify';
import { useDataLayerValue } from './components/DataLayer/DataLayer';
import Login from './components/Login/Login';
import './App.css';

const spotifyApi = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotifyApi.setAccessToken(_token);
      spotifyApi.getMe()
        .then(user => {
          dispatch({
            type: 'SET_USER',
            user: user
          })
        })

      spotifyApi.getMyTopTracks({ 'limit': 50, 'time_range': 'long_term' })
        .then(list => {
          dispatch({
            type: 'SET_TOP_TRACKS_ALL_TIME',
            topTracks: list
          })

          console.log(list);
        })

      spotifyApi.getMyTopArtists({ 'limit': 50, 'time_range': 'long_term' })
        .then(list => {
          dispatch({
            type: 'SET_TOP_ARTISTS_ALL_TIME',
            topArtists: list
          })

          console.log(list);
        })
    }
  });

  return (
    <div className="App">
      {!token && <Login />}
      <div className="appBody">
        {token &&
          <div className="navigation">
            <h1 className="navigationTitle">Statify</h1>
            <br />

            <div className="navigationTab">
              <div className="navigationLabel">
                <HomeIcon className="navigationLabelIcon" />
                <Link className="navigationSubheader" to="/">Dashboard</Link>
              </div>
            </div>

            <br />
            <strong className="navigationDivider">YOUR STATISTICS</strong>
            <hr />

            <div className="navigationTab">
              <Link className="navigationLink" to="/top-songs">Your Top Songs</Link>
            </div>

            <div className="navigationTab">
            <Link className="navigationLink" to="/top-artists">Your Top Artists</Link>
            </div>
          </div>
        }
        {token && <Outlet />}
      </div>
    </div>
  );
}

export default App;
