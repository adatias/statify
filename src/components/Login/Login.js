import React from 'react';
import './Login.css';
import { loginUrl } from '../../spotify'

function Login() {
  return (
    <div className="login">
      <div className="loginBubble">
        <h1>Statify</h1>
        <h2>Track your Spotify listening statistics</h2>
        <p>Ever wanted to take a look at your Spotify statistics without waiting until Spotify Wrapped at the end of the year? Then Statify has you covered! Take a look at your most listened to songs, artists and more from the past week, year or all-time!</p>
        <a className="loginButton" href={loginUrl}>
          <p>LOGIN WITH </p>
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt=""></img>
        </a>
      </div>
    </div>
  );
}

export default Login;
