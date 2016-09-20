import React, { Component } from 'react';

class VideoListItem extends Component {
  render() {
    // console.log('this ', this.props);
    return (
      <div className="col-md-3 col-sm-6 hero-feature">
          <div className="thumbnail">
              <img src={this.props.videoItem.snippet.thumbnails.default.url} alt="" />
              <div className="caption">
                  {this.props.videoItem.snippet.title}
              </div>
          </div>
      </div>
    )
  }
}

export default VideoListItem;
