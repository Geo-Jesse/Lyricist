import React, { Component } from 'react';

import VideoListItem from './VideoListItem';

class VideoList extends Component {

  render() {
    const listItems = this.props.videos.map((value, index) => {
      // console.log('value ', index);


        return <VideoListItem onVideoSelect={this.props.onVideoSelect} videoItem={value} key={value.etag} />;
    });
    return (
      <div className="col-md-3 col-sm-6 hero-feature">
           <div className="thumbnail">
               {listItems} 
           </div>
       </div>
    )

  }
}

export default VideoList;
