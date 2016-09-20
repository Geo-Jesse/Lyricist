import React, { Component } from 'react'
import axios from '../utils/axios';
import Lyrics from './Lyrics';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.getLyrics = this.getLyrics.bind(this)
    this.renderLyrics = this.renderLyrics.bind(this)

    this.state = {
      lyrics: {},
      fetchedLyrics: false
    }
  }

  renderLyrics() {
    if (!this.state.fetchedLyrics) {
      return <p>enter song title</p>
    }
    return (
      <Lyrics>{this.state.songTitle}</Lyrics>
    )

  }


    getLyrics(e) {
      e.preventDefault()
      let lyrics = this.refs.songTitle.value
      let url = "http://localhost:3000/lyrics"

      axios.get(url).then((data) => {
         console.log(data.data[0].songTitle);

        this.setState({
          lyrics: data,
          fetchedLyrics: true
        })
      })
    }


  render(){
    return(
      <div>
      <form onSubmit={this.getLyrics}>
        <input className="searchBar" ref="songTitle" type="text" placeholder="enter artist/song here" onKeyUp={(event) => {
          this.props.onSearchTermChanged(event.target.value);
        }} />
        <input className="submitButton" type="submit" />

      </form>
      {this.renderLyrics()}

      </div>
    )
  }
}
export default SearchBar;
