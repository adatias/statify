import React from 'react'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { useDataLayerValue } from '../DataLayer/DataLayer';
import Header from '../Header/Header'
import SongInfo from '../SongInfo/SongInfo';
import './TopSongs.css'

function TopSongs() {
  const [{ topTracks }] = useDataLayerValue();

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
          <PlayCircleFilledIcon className="topSongsShuffle" />
          <div className="saveToPlaylist">Save to Playlist</div>
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
