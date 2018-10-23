import React from 'react'

import "./card.css";

const Videos = props => (
  <div className="parent">
    <div className="row">
      {props.videos.map(video => {
        return (
          <div
            key={video.views}
            className="col-md-4"
            style={{ marginbottom: "2rem" }}>
            <div className="video-box">
              {/* <img className="Recipe-img" src={video.image_url} alt="" /> */}
              <div className="video-title">
                <b>
                  {video.title.length < 32
                    ? `${video.title}`
                    : `${video.title}`}
                </b>
              </div>
              <div className="speaker-Name">
                <span>
                    {video.main_speaker}
                </span>
              </div>
              <div className="description">
                 <b>Description:</b>{video.description}
              </div>
              <div className="url">
              <b>Video url:</b><a href={video.url}>{video.url}</a>
              </div>
              <div className="ratings">
              <b>Ratings:</b>{video.ratings.name}&nbsp;
              {video.ratings[1].name}
              
              </div>
            </div>
          </div>
        
        );
      })}
    </div>
  </div>
);


export default Videos;
