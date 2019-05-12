import React from 'react';

const onUserSelected=(video) =>{ // callback method to change video on videoplayer on click of video in video list
    this.props.onUserSelected(video);
   }
const VideoListItem = (props) => {
    const video = props.video;
    const onUserSelected = props.onUserSelected;
    // console.log(video);    
    const imageUrl = video.snippet.thumbnails.default.url;

    return ( // styling of the videoplayer and the data benethe the videoplayer
    <li onClick={() => onUserSelected(video)} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageUrl} />
            </div>
            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </div>
    </li>
    );
};

export default VideoListItem;