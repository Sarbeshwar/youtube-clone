import React from 'react';
import Comments from './comments';
import Like from './like';
const VideoDetail = (props) => {
    const video = props.video;
    
    if(!video){ // if no result is found then displaying NO VIDEOS FOUND
        return <div>
                <h1>NO VIDEOS FOUND</h1>
        </div>;
    }
    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (// component to display the data and video if searchbar has accurate results
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
            <Like/>
            <Comments/>
        </div>
    );
};

export default VideoDetail;