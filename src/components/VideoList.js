import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem video={video} />
    });

    //In App.js it´s declare a props 'video'
    return <div className="ui relaxed divided list">{renderedList}</div>
};

export default VideoList;