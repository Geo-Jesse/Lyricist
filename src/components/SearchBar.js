import React, { Component } from 'react'



class SearchBar extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault()
    let lyrics = this.refs.songTitle.value
    this.props.getLyrics(lyrics)

  }
  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <input className="searchBar" ref="songTitle" type="text" placeholder="enter artist/song here" onKeyUp={(event) => {
          this.props.onSearchTermChanged(event.target.value);
        }} />
        <input className="submitButton" type="submit" />
      </form>
      </div>
    )
  }
}
export default SearchBar;
