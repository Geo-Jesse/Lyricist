import React, { Component } from 'react';

class VideoListItem extends Component {
  render() {
    return (
      <li onClick={this.props.onVideoSelect.bind(this, this.props.videoItem)} className="row text-center">
        <div className="col-md-3 col-sm-6 hero-feature">
          <div className="thumbnail">
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
