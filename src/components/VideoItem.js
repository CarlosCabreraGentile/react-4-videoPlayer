import React from 'react';
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
    //props contain the info of a particular video
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img
                alt="imagen"
                className="ui image"
                src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;