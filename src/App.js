import React, { Component } from 'react';
import axios from './utils/axios';
import './App.css';

import SearchBar from './components/SearchBar';
import VideoReturn from './components/VideoReturn';
import Lyrics from './components/Lyrics';
import VideoList from './components/VideoList';

import YTSearch from 'youtube-api-search';

import _ from 'lodash';

const API_KEY='AIzaSyCnk7rSA5owsjUDTLgoYRho-7W6Y9BeWV0';

class App extends Component {
  constructor(props) {
    super(props);
    // console.log(App);
    this.getLyrics = this.getLyrics.bind(this)
    this.renderLyrics = this.renderLyrics.bind(this)


    this.state = {
      videos: [],
      activeVideo: null,
      lyrics: '',
      fetchedLyrics: false
    };
    // console.log(this);

    this.videoSearch('guitars');
    // console.log(this.videoSearch);


//auto search
      this.onSearchTermChanged = _.debounce(this.onSearchTermChanged, 200)
    }

    onSearchTermChanged(term) {
      this.videoSearch(term);
    }

    videoSearch(term) {
      YTSearch({ key: API_KEY, term: term }, (videos) => {
        if (videos.length > 4) {
          videos.pop();
        }
        // console.log('videos', videos);

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

    // lyrics return
    renderLyrics() {
      if (!this.state.fetchedLyrics) {
        return <p>enter song title</p>
      }
      return (
        <div>{this.state.lyrics}</div>
      )
    }

    getLyrics(lyrics) {
      let url = "http://localhost:3000/lyrics"

      axios.get(url).then((data) => {
        //  console.log(data.data[0].lyrics);

        this.setState({
          lyrics: data.data[0].lyrics,
          fetchedLyrics: true
        })
      })
    }

  render() {
    return (
      <div className="container">
        <SearchBar
          onSearchTermChanged={this.onSearchTermChanged.bind(this)}
          getLyrics={this.getLyrics}
        />
          {/* <!-- Jumbotron Header --> */}
        <header className="jumbotron hero-spacer col-lg-12">

          {/* //Lyrics return */}
          <div className="lyricsContainer col-lg-6">
            <Lyrics lyrics={this.state.lyrics} />
          </div>

          {/* video return */}
          <div className="search-return col-lg-6">
            <VideoReturn video={this.state.activeVideo} />
          </div>

        </header>

        <hr />

        {/* <!-- Title --> */}
        <div className="row">
            <div className="col-lg-12">
                <h3>Other Videos</h3>
            </div>
        </div>
        {/* <!-- /.row --> */}

        <VideoList onVideoSelect={this.onVideoSelect.bind(this)} videos={this.state.videos} />

        {/* <!-- Footer --> */}
        <footer>
            <div className="row">
                <div className="col-lg-12">
                    <p>Copyright &copy; Kickbutt GA WDI7 Developers</p>
                </div>
            </div>
        </footer>

      </div>
    );
  }
}

export default App;
