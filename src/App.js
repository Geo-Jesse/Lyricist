import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar';
import SearchReturn from './components/SearchReturn';
import Lyrics from './components/Lyrics';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>The True Lyricist</h2>
        </div>

        <footer>
          <p>Developed by kickass folks</p>
        </footer>
      </div>
    );
  }
}

export default App;
