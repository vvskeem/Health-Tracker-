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
      <div style={{ backgroundColor: " #38344f" }}>
        <h1 className="pageTitle">Health Tracker</h1>
        {/* <button onClick="">Get New Updates</button> */}

        <div className="container">
          <div className="cards">
            <div className="face face1">
              <div className="content">
                <img src="https://cdn4.iconfinder.com/data/icons/business-line-icons-vol-2/65/70-512.png" />
                <h3>Heart</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <div className="heartData">
                  {this.state.heartData.length && (
                    <div>
                      {/* <h2>{this.state.heartData[0].sourceName}</h2> */}

                      <h3>{this.state.heartData[0].value} bpm</h3>
                      <h5 className="date">
                        {this.state.heartData[0].heartDate}
                      </h5>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="cards">
            <div className="face face1">
              <div className="content">
                <img src="https://static.thenounproject.com/png/575940-200.png" />
                <h3>Weight</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <div className="weightData">
                  {this.state.heartData.length && (
                    <div>
                      <h2>{this.state.weightData[0].trackWeight} lbs</h2>
                      <h5 className="date">
                        {this.state.weightData[0].weightDate}
                      </h5>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="cards">
            <div className="face face1">
              <div className="content">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQOgqkm8MRF5Jdjvbc3dinCcid_YJyiGMQ2fJbtaj6INH8Lp76&usqp=CAU" />
                <h3>Steps</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <div className="stepsData">
                  {this.state.heartData.length && (
                    <div>
                      <h2>{this.state.stepsData[0].stepsToday} steps</h2>
                      <h5 className="date">
                        {this.state.stepsData[0].stepsDate}
                      </h5>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
