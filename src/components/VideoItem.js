import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  const title = video.snippet.title;
  const thumbnail = video.snippet.thumbnails.medium.url;
  // const description = video.snippet.description;

  return (
    <div className="video-item segment item" onClick={() => onVideoSelect(video)}>
      <img className="ui image" src={thumbnail} alt={title} />
      <div className="content">
        <div className="header">{title}</div>
        {/* <div className="description">{description}</div> */}
      </div>
    </div>
  );
};

export default VideoItem;
