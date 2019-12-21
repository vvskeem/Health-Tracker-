import React from "react";
import axios from "axios";
import "./styles.css";
const apiHeart = "https://vvshealthtracker.herokuapp.com/heart";
const apiSteps = "https://vvshealthtracker.herokuapp.com/steps";
const apiWeight = "https://vvshealthtracker.herokuapp.com/weight";

export default class PersonList extends React.Component {
  state = {
    heartData: [],
    weightData: [],
    stepsData: []
  };

  getHeat = axios.get(apiHeart);
  getSteps = axios.get(apiSteps);
  getWeight = axios.get(apiWeight);

  componentDidMount() {
    Promise.all([this.getHeat, this.getWeight, this.getSteps]).then(
      responses => {
        let heartData = responses[0].data.result;
        let weightData = responses[1].data.result;
        let stepsData = responses[2].data.result;
        console.log(heartData);
        console.log(weightData);
        console.log(stepsData);
        this.setState({
          heartData,
          weightData,
          stepsData
        });
      }
    );
  }

  render() {
    return (
      <div>
        <h1 className="pageTitle">Doctors View</h1>
        <button onClick="">Get New Updates</button>

        <div className="dataContainer">
          <div className="heartData">
            {this.state.heartData.length && (
              <div>
                <h1>Heart</h1>
                <h2>{this.state.heartData[0].sourceName}</h2>
                <h3>{this.state.heartData[0].value}</h3>
                <h5 className="date">{this.state.heartData[0].heartDate}</h5>
              </div>
            )}
          </div>

          <div className="weightData">
            {this.state.heartData.length && (
              <div>
                <h1>Weight</h1>
                <h2>{this.state.weightData[0].trackWeight}</h2>
                <h5 className="date">{this.state.weightData[0].weightDate}</h5>
              </div>
            )}
          </div>

          <div className="stepsData">
            {this.state.heartData.length && (
              <div>
                <h1>Steps</h1>
                <h2>{this.state.stepsData[0].stepsToday}</h2>
                <h5 className="date">{this.state.stepsData[0].stepsDate}</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
