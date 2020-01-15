import React from "react";
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
        <h3 className="title">Research</h3>
      </div>
      <div className="card-container">
        <TopicCards
          image="https://miro.medium.com/max/1540/1*6olU7U29Vvokla_URK0ANg.png"
          title="Beacon Technology"
          solution="Beacons"
          link="https://estimote.com/"
        />
        <TopicCards
          image="https://www.medicaldevice-network.com/wp-content/uploads/sites/11/2019/10/Wearable-Tech-in-Healthcare.jpg"
          title="Automated Healthcare"
          solution="vvs Health Tracker"
          link="#"
        />
        <TopicCards
          image="https://cdn.homedit.com/wp-content/uploads/2010/08/14.jpg"
          title="Smart Home Technologies"
          solution="iHome"
          link="https://www.lg.com/us/lg-thinq?cmpid=SEM_GMC_ThinQ_2019ThinQ_Brand_Google_ThinQ_k1167_US_Brand_PC&gclid=Cj0KCQiAovfvBRCRARIsADEmbRL1t4dl9g-ajVBFXQFGUXNbKhCYtR6L2yZJWCICmTEoTw4CB3QsI3gaAg8EEALw_wcB"
        />
        <TopicCards
          image="https://hackaday.com/wp-content/uploads/2019/07/FarmBot-Genesis-XL.jpg?w=800"
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
