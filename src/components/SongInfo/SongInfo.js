import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './SongInfo.css';

function SongInfo({ track, index }) {
  function goToSpotifySong() {
    window.open(track.external_urls.spotify)
  }

  return (
    <div className="songInfo" onClick={goToSpotifySong}>
      <div className="songPlay">
        <PlayArrowIcon />
      </div>
      <div className="songIndex">{index + 1}.</div>
      <img className="songAlbum" src={track.album.images[0].url} alt="" />
      <div className="songData">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map(artist => artist.name).join(', ')} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  )
}

export default SongInfo
