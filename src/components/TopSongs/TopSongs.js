import React, { useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { useDataLayerValue } from '../DataLayer/DataLayer';
import Header from '../Header/Header'
import SongInfo from '../SongInfo/SongInfo';
import './TopSongs.css'

function TopSongs() {
  const [{ user, topTracks }] = useDataLayerValue();
  const [playlistSaved, setPlaylistSaved] = useState(false);

  function createPlaylist() {
    const spotifyApi = new SpotifyWebApi();

    spotifyApi.createPlaylist(user.id, {'name' : "Your All-Time Top Songs", 'description' : "Your top 50 most listened to songs on Spotify of all time!"})
      .then(response => {
        let uris = [];
        topTracks?.items.map(item => 
          uris.push(item.uri)
        );

        spotifyApi.addTracksToPlaylist(response.id, uris);
        setPlaylistSaved(true);
      })
  }

  function goToRandomSpotifySong() {
    let idx = Math.floor(Math.random() * 50);
    window.open(topTracks.items[idx].external_urls.spotify)
  }

  return (
    <div className="topSongs">
      <Header />

      <div className="topSongsHeader">
        <div className="topSongsDescription">
          <strong>YOUR STATISTICS</strong>
          <h2>Your Top Songs</h2>
          <p>Your most listened to songs on Spotify of all time, get ready to feel cool. Or much less cool than you thought.</p>
        </div>
      </div>

      <div className="topSongsTable">
        <div className="topSongsIcons">
          <PlayCircleFilledIcon className="topSongsShuffle" onClick={goToRandomSpotifySong} />
          {!playlistSaved && <div className="saveToPlaylist" onClick={createPlaylist}>Save to Playlist</div>}
          {playlistSaved && <div className="savedToPlaylist">Saved!</div>}
        </div>

        {topTracks?.items.map((item, index) => 
          <SongInfo track={item} index={index} />
        )}

        <div className="songBreak"></div>
      </div>
    </div>
  )
}

export default TopSongs
