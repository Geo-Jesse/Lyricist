import React, { Component } from 'react';

import VideoListItem from './VideoListItem';

class VideoList extends Component {

  render() {
    const listItems = this.props.videos.map((value, index) => {
      // console.log('value ', index);


        return <VideoListItem onVideoSelect={this.props.onVideoSelect} videoItem={value} key={value.etag} videos={this.props.videos} />;
    });
    return (
      <ul className="col-md-4 list-group">
        {listItems}
      </ul>
    )

  }
}

export default VideoList;
