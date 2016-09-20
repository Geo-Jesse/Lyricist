import React, { Component } from 'react';

class VideoListItem extends Component {
  render() {
    return (
      <li onClick={this.props.onVideoSelect.bind(this, this.props.videoItem)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img alt="" className="media-object" src={this.props.videoItem.snippet.thumbnails.default.url} />
          </div>
        </div>
        <div className="media-body">
          <div className="media-heading">{this.props.videoItem.snippet.title}</div>
        </div>
      </li>
    )
  }
}

export default VideoListItem;
