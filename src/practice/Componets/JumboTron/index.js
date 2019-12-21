import React from "react";
import "./jumbo.css";
function Jumbotron(props) {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">{props.jumbo}</h1>
          <img className="jumbo-img" src={props.image} alt="jumbo image cap" />
          <p className="lead">
            Welcome to the 4th Industrial Revolution, I am glad you are keeping
            up with the times
          </p>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
