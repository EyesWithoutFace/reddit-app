import './App.css';
import React from 'react';
import {FetchPopular} from './redditFetch' 

const App = () => {
  return (
    <>
    <link rel='stylesheet' href='../src/App.css'></link>
      <a href='../../index.html'>
      <h1>
      <img src='Reddit-Logo.png' alt='Reddit'></img>
      </h1>
      </a>
    <h2 id="popularBtn" onClick={FetchPopular}>Popular</h2>
    </>
  );
}

export default App