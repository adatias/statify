import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from './reducer'
import TopSongs from './components/TopSongs/TopSongs';
import TopArtists from './components/TopArtists/TopArtists';
import Dashboard from './components/Dashboard/Dashboard';
import { DataLayer } from './components/DataLayer/DataLayer'
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path="top-songs" element={<TopSongs />} />
            <Route path="top-artists" element={<TopArtists />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
