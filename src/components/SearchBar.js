import React, { Component } from 'react'



class SearchBar extends Component {
  render(){
    return(
      <div>
      <form onSubmit={this.getLyrics}>
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
