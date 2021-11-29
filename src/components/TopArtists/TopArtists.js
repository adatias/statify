import React from 'react'
import ArtistInfo from '../ArtistInfo/ArtistInfo';
import { useDataLayerValue } from '../DataLayer/DataLayer';
import Header from '../Header/Header'
import './TopArtists.css'

function TopArtists() {
  const [{ topArtists }] = useDataLayerValue();

  return (
    <div className="topArtists">
      <Header />

      <div className="topArtistsHeader">
        <div className="topArtistsDescription">
          <strong>YOUR STATISTICS</strong>
          <h2>Your Top Artists</h2>
          <p>Your most listened to artists on Spotify of all time. They've been so lucky to share this time with you.</p>
        </div>
      </div>

      <div className="topArtistsTable">

        {topArtists?.items.map((item, index) => 
          <ArtistInfo artist={item} index={index} />
        )}

        <div className="artistBreak"></div>
      </div>
    </div>
  )
}

export default TopArtists
