import React from "react";
import "./styles/TweetContainer.css";

const TweetContainer = (props) => {
  return (
    <div className="TweetContainer">
      <div className="acc-wrap">
        <div className="acc-img"></div>
      </div>
      <div className="tweet-wrap">
        <div className="acc-name">
          <span>{props.name}</span>
          <span>@{props.nickname}</span>
        </div>
        <p className="text">{props.text}</p>
        <div className="likes-wrap">
          <div className="comment">
            <i class="fa-solid fa-comment"></i> {props.comments}
          </div>
          <div className="rt">
            <i class="fa-solid fa-retweet"></i> {props.rt}
          </div>
          <div className="like">
            <i class="fa-solid fa-heart"></i> {props.likes}
          </div>
          <div className="share">
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetContainer;
