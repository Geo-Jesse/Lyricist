import React, { Component } from 'react'

class Lyrics extends Component {
  render(){
    return(
        <div>
          {this.props.lyrics}
        </div>
    )
  }
}
export default Lyrics;
