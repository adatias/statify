import React from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footerLeft">
        <img className="footerAlbumCover" src="" alt=""></img>
        <div className="footerSongInfo">
          {/* Insert song title and artist here */}
        </div>
      </div>

      <div className="footerCenter">
        <ShuffleIcon className="footerGreen" />
        <SkipPreviousIcon className="footerIcon" />
        <PlayCircleOutlineIcon fontSize="large" className="footerIcon" />
        <SkipNextIcon className="footerIcon" />
        <RepeatIcon className="footerGreen" />
      </div>

      <div className="footerRight">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
