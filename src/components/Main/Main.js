import React from "react";
import TweetContainer from "../TweetContainer/TweetContainer";
import TweetInput from "../TweetInput/TweetInput";
import "./styles/Main.css";
import { Tweets } from "../../Tweets";
import TrendsContainer from "../TrendsContainer/TrendsContainer";

const Main = () => {
  return (
    <div className="Main">
      <div className="main-header">
        <h2>Home</h2>
      </div>
      <TweetInput />

      {Tweets.map(({ id, name, nickname, text, comments, rt, likes }) => (
        <div key={id}>
          <TweetContainer
            name={name}
            nickname={nickname}
            text={text}
            comments={comments}
            rt={rt}
            likes={likes}
          />
        </div>
      ))}
    </div>
  );
};

export default Main;
