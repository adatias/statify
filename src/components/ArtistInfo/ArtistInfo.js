import React from 'react';
import './ArtistInfo.css';

function ArtistInfo({ artist, index }) {
  function goToSpotifyProfile() {
    window.open(artist.external_urls.spotify)
  }

  return (
    <div className="artistInfo" onClick={goToSpotifyProfile}>
      <div className="artistIndex">{index + 1}.</div>
      <img className="artistImage" src={artist?.images[0].url} alt="" />
      <div className="artistData">
        <h1>{artist.name}</h1>
      </div>
    </div>
  )
}

export default ArtistInfo
