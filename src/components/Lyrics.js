import React, { Component } from 'react'



class Lyrics extends Component {
  render(){
    return(
        <div>
          {this.props.children}
        </div>
    )
  }
}
export default Lyrics;
