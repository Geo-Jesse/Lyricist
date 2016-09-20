import React, { Component } from 'react';

import './App.css';

import SearchBar from './components/SearchBar';
import SearchReturn from './components/SearchReturn';
import Lyrics from './components/Lyrics';
// import VideoList from './components/VideoList';

import YTSearch from 'youtube-api-search';

import _ from 'lodash';

const API_KEY='AIzaSyCnk7rSA5owsjUDTLgoYRho-7W6Y9BeWV0';

  class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        videos: [],
        activeVideo: null
      };

      this.videoSearch('bears');
//auto search
      this.onSearchTermChanged = _.debounce(this.onSearchTermChanged, 200)
    }

    onSearchTermChanged(term) {
      this.videoSearch(term);
    }

    videoSearch(term) {
      YTSearch({ key: API_KEY, term: term }, (videos) => {
        console.log('videos', videos);

        this.setState({
          videos: videos,
          activeVideo: videos[0]
        });
      });
    }

    onVideoSelect(video) {
      this.setState({
        activeVideo: video
      })
    }

  render() {
    return (
      <div className="container">
        <SearchBar onSearchTermChanged={this.onSearchTermChanged.bind(this)}/>
          {/* <!-- Jumbotron Header --> */}
          <header className="jumbotron hero-spacer col-lg-12">
            <div className="lyricsContainer col-lg-8">
              <Lyrics />
              <SearchReturn />

            </div>

          </header>

          <hr />

          {/* <!-- Title --> */}
          <div className="row">
              <div className="col-lg-12">
                  <h3>Latest Features</h3>
              </div>
          </div>
          {/* <!-- /.row --> */}
            {/* <VideoList /> */}

          {/* <!-- /.row --> */}

          <hr />

          {/* <!-- Footer --> */}
          <footer>
              <div className="row">
                  <div className="col-lg-12">
                      <p>Copyright &copy; Kickbutt GA WDI8 Developers</p>
                  </div>
              </div>
          </footer>

      </div>
    );
  }
}

export default App;
