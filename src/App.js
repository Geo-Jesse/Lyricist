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
    this.onSearchTermChanged = this.onSearchTermChanged.bind(this)
    this.getLyrics = this.getLyrics.bind(this)
    // this.renderLyrics = this.renderLyrics.bind(this)




    this.state = {
      videos: [],
      activeVideo: null,
      lyrics: '',
      fetchedLyrics: false
    };
    // console.log(this);

    this.videoSearch('');
    // console.log(this.videoSearch);


//auto search
      this.onSearchTermChanged = _.debounce(this.onSearchTermChanged, 200)
    }

    onSearchTermChanged(term) {
      this.videoSearch(term)
      this.getLyrics(term);
      //returns back the searchterm in console log
      // console.log(term);
    }


    getLyrics(lyrics) {
      let url = "https://lyricist-api.herokuapp.com/lyrics/"+lyrics

      axios.get(url).then((data) => {
        //  console.log(data.data.lyrics);

        this.setState({
          lyrics: data.data.lyrics,
          fetchedLyrics: true
        })
      })
    }

    videoSearch(term) {
      YTSearch({ key: API_KEY, term: term }, (videos) => {
        if (videos.length > 4) {
          videos.pop();
        }
        //youtube video objects returned
        // console.log('videos', videos);

        this.setState({
          videos: videos,
          activeVideo: videos[0]
        });
        // console.log(videos);
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
        <SearchBar
          onSearchTermChanged={this.onSearchTermChanged}
          getLyrics={this.getLyrics} />


        {/* <!-- Jumbotron Header --> */}
        {/* <header className="jumbotron hero-spacer col-lg-12"> */}

          {/* //Lyrics return */}
          
          <div className=" jumbotron lyricsContainer col-lg-6 col-md-6 col-sm-12">
            <Lyrics lyrics={this.state.lyrics} />
            {/* {this.state.lyrics} */}
          </div>


          {/* video return */}
          <div className="search-return col-lg-6 col-md-6 col-sm-12">
            <VideoReturn video={this.state.activeVideo} />
          </div>


        {/* </header> */}



        {/* <!-- Title --> */}

            <div className="row col-lg-12">
                <h3 className="otherVideos">Other Videos</h3>
            </div>

        {/* <!-- /.row --> */}

        <VideoList onVideoSelect={this.onVideoSelect.bind(this)} videos={this.state.videos} />

        {/* <!-- Footer --> */}
        <footer>
            <div className="ro">
                <div className="col-lg-12">
                    <p className="footer">Copyright &copy; Kickbutt GA WDI7 Developers</p>
                </div>
            </div>
        </footer>

      </div>
    );
  }
}

export default App;
