import React from "react";
import "./TopicCards.css";
function TopicCards(props) {
  return (
    <div className="addmargin">
      <div className="card text-white bg-dark mb-3">
        <img className="card-img-top" src={props.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
        </div>
        <div className="btn-div">
          <a href={props.link} className="btn btn-light">
            {props.solution}
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopicCards;
