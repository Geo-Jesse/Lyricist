import React, { Component } from 'react'

class SearchBar extends Component {
  render(){
    return(
      <form>
        <input className="searchBar" type="text" placeholder="enter artist/song here" />
        <input className="submitButton" type="submit" />

      </form>
    )
  }
}
export default SearchBar;
