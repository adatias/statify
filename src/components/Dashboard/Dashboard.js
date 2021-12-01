import React, { useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from '../DataLayer/DataLayer';
import Header from '../Header/Header'
import './Dashboard.css'

const spotifyApi = new SpotifyWebApi();

function Dashboard() {
  const [{ user, topTracks, topArtists, recentTopTracks, recentTopArtists }, dispatch] = useDataLayerValue();

  useEffect(() => {
    spotifyApi.getMyTopTracks({ 'limit': 50, 'time_range': 'short_term' })
      .then(list => {
        dispatch({
          type: 'SET_TOP_TRACKS_RECENT',
          recentTopTracks: list
        })
      })

    spotifyApi.getMyTopArtists({ 'limit': 50, 'time_range': 'short_term' })
      .then(list => {
        dispatch({
          type: 'SET_TOP_ARTISTS_RECENT',
          recentTopArtists: list
        })
      })
  }, []);

  return (
    <div className="dashboard">
      <Header />

      <div className="dashboardHeader">
        <div className="dashboardDescription">
          <h2>Welcome to Statify!</h2>
          <p>Welcome {user?.display_name.split(" ")[0]}, thanks for visiting! You can use the navigation bar to the left to view specific statistics about your listening habits! Or look below to see some quick stats!</p>
        </div>
      </div>

      <div className="dashboardStats">
        <div className="dashboardStatRow">
          <div className="dashboardStatBox">
            <h1>Your top song of all-time:</h1>
            <img src={topTracks?.items[0].album.images[0].url} alt=""></img>
            <h2>{topTracks?.items[0].name}</h2>
            <h3>{topTracks?.items[0].artists.map(artist => artist.name).join(', ')}</h3>
          </div>
          <div className="dashboardStatBox">
            <h1>Your top artist of all-time:</h1>
            <img src={topArtists?.items[0].images[0].url} alt=""></img>
            <h2>{topArtists?.items[0].name}</h2>
          </div>
        </div>

        <div className="dashboardStatRow">
          <div className="dashboardStatBox">
            <h1>Recently you've been listening to this song very frequently:</h1>
            <img src={recentTopTracks?.items[0].album.images[0].url} alt=""></img>
            <h2>{recentTopTracks?.items[0].name}</h2>
            <h3>{recentTopTracks?.items[0].artists.map(artist => artist.name).join(', ')}</h3>
          </div>
          <div className="dashboardStatBox">
            <h1>And recently you've been listening to a lot of music from this artist:</h1>
            <img src={recentTopArtists?.items[0].images[0].url} alt=""></img>
            <h2>{recentTopArtists?.items[0].name}</h2>
          </div>
        </div>

        <div className="artistBreak"></div>
      </div>
    </div>
  )
}

export default Dashboard
