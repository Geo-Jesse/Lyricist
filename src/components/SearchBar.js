import React, { Component } from 'react'
import axios from 'axios';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.getLyrics = this.getLyrics.bind(this)
  }
    getLyrics(e) {
      e.preventDefault()
      let lyrics = this.refs.songTitle.value
      let url = "http://localhost:3000/lyrics"

      axios.get(url).then(({ data }) => {
        console.log({data});
      })
    }


  render(){
    return(
      <form onSubmit={this.getLyrics}>
        <input className="searchBar" ref="songTitle" type="text" placeholder="enter artist/song here" onKeyUp={(event) => {
          this.props.onSearchTermChanged(event.target.value);
        }} />
        <input className="submitButton" type="submit" />

      </form>
    )
  }
}
export default SearchBar;
