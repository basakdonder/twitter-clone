import React from "react";
import "./styles/TweetInput.css";

const TweetInput = () => {
  return (
    <div className="TweetInput">
      <div className="acc-wrap">
        <div className="acc-img"></div>
      </div>
      <div className="input-wrap">
        <input type="text" placeholder="What's happening?" />
        <div className="icons-wrap">
          <div className="icons">
            <i class="fa-solid fa-image"></i>
            <i class="fa-solid fa-square-poll-horizontal"></i>
            <i class="fa-solid fa-face-grin"></i>
            <i class="fa-solid fa-calendar-days"></i>
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <button className="tweet-btn">Tweet</button>
        </div>
      </div>
    </div>
  );
};

export default TweetInput;
