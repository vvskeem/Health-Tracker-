import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./practice";
import TopicCards from "./practice/Componets/TopicCards";
import Jumbotron from "./practice/Componets/JumboTron";
import PersonList from "./practice/Componets/buttonAxios";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="tron">
        <Jumbotron
          jumbo="Internet of Everything"
          image="https://evrythng.com/wp-content/uploads/EVRYTHNG-logo.png"
        />
      </div>
      <div>
        <h3 className="title">IOT SOLUTIONS OF THE FUTURE</h3>
      </div>
      <div className="card-container">
        <TopicCards
          image="https://i.pinimg.com/originals/46/81/3e/46813ea4f1c272cca94e44bc2c9f1d74.jpg"
          content="example text"
          title="Beacon Technology"
          solution="Beacons"
          link="#"
        />
        <TopicCards
          image="https://www.medicaldevice-network.com/wp-content/uploads/sites/11/2019/10/Wearable-Tech-in-Healthcare.jpg"
          content="example text"
          title="Personalized Healthcare"
          solution="vvs Health Tracker"
          link="#"
        />
        <TopicCards
          image="http://www.smarthomegcc.com/img/about.jpg"
          content="example text"
          title="Smart Home Technologies"
          solution="iHome"
          link="#"
        />
        <TopicCards
          image="https://i.pinimg.com/originals/fd/92/91/fd9291101f5f4ff1a766cda54b98529e.jpg"
          content="example text"
          title="Agriculture Revolution"
          solution="Robotic Farming"
          link="https://farm.bot/"
        />
      </div>
      <div>
        <PersonList />
      </div>
    </div>
  );
}

export default App;
