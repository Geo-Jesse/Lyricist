import React, { Component } from 'react'

class SearchBar extends Component {
  render(){
    return(
      <form>
        <input className="searchBar" type="text" placeholder="enter artist/song here" onKeyUp={(event) => {
          this.props.onSearchTermChanged(event.target.value);
        }} />
        <input className="submitButton" type="submit" />

      </form>
    )
  }
}
export default SearchBar;
