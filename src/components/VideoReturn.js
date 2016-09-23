import React, { Component } from 'react'

class VideoReturn extends Component {
  render(){
    if (!this.props.video){
      return<div>loading...</div>;
    }

    let videoUrl = `https://youtube.com/embed/${this.props.video.id.videoId}`;

    return(
      <div className="video-detail col-lg-12">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={videoUrl} ></iframe>
        </div>
        <div className="details">

        </div>
      </div>
    )
  }
}
export default VideoReturn;
