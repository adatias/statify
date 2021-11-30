import React, { useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from '../DataLayer/DataLayer';
import Header from '../Header/Header'
import './Dashboard.css'

const spotifyApi = new SpotifyWebApi();

function Dashboard() {
  const [{ user, topTrack }, dispatch] = useDataLayerValue();
  useEffect(() => {
    spotifyApi.getMe()
      .then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
  });

  return (
    <div className="dashboard">
      <Header />

      <div className="dashboardHeader">
        <div className="dashboardDescription">
          <h2>Welcome to Statify!</h2>
          {/* add "Or look below to see some quick stats!" to <p> below when new quick stats are added */}
          <p>Welcome {user?.display_name.split(" ")[0]}, thanks for visiting! You can use the navigation bar to the left to view specific statistics about your listening habits!</p>
        </div>
      </div>

      <div className="dashboardStats">
        {/* <div className="dashboardStatBox">
          <h1>Your top song of all-time:</h1>
          <img src={topTrack?.items[0].album.href} alt=""></img>
        </div> */}

        <div className="artistBreak"></div>
      </div>
    </div>
  )
}

export default Dashboard
