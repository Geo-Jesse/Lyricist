import React, { Component } from 'react'
import {Icon} from 'react-fa'



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
      <Icon name="search" className="search-icon"></Icon>
        <input className="searchBar" ref="songTitle" type="text" placeholder="Enter Artist or Song Here" onKeyUp={(event) => {
          this.props.onSearchTermChanged(event.target.value);
        }} />


      </form>
      </div>
    )
  }
}
export default SearchBar;
