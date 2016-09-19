import React, { Component } from 'react';

import VideoListItem from './VideoListItem';

class VideoList extends Component {

  render() {
    const listItems = this.props.videos.map((value, index) => {
      // console.log('value ', value);

        return <VideoListItem onVideoSelect={this.props.onVideoSelect} videoItem={value} key={value.etag} />;
    });

    return (
      <ul className="col-md-3 list-group">
        {listItems}
      </ul>
    )
  }
}

export default VideoList;
