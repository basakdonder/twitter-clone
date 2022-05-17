import React from "react";
import "./styles/TrendsContainer.css";
import { Trends } from "../../Trends";

const TrendsContainer = () => {
  return (
    <div className="TrendsContainer">
      <input
        type="text"
        className="search-input"
        placeholder="Search Twitter"
      />

      <div className="trends-wrap">
        <h3>Trends for you</h3>

        {Trends.map(({ id, header, subj, tweets }) => (
          <div className="trend-header" key={id}>
            <span>{header}</span>
            <span className="subj">{subj}</span>
            <span>{tweets}K Tweets</span>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendsContainer;
