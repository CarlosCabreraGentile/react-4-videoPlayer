import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem
            key={video.id.videoId}
            onVideoSelect={onVideoSelect}
            video={video}
        />
    });

    //In App.js it´s declare a props 'video'
    return <div className="ui relaxed divided list">{renderedList}</div>
};

export default VideoList;