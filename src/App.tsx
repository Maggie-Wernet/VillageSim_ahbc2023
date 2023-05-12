import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Map } from "./components/Map/Map";
import { RescourcesView } from "./components/ResourcesView/ResourcesView";
import { Improvement } from "./Models/Improvement";
import { AddImprovement } from "./components/AddImprovement/AddImprovement";

function App() {
  const [people, setPeople] = useState(0);
  const [grain, setGrain] = useState(5);
  const [sheep, setSheep] = useState(1);
  const [lumber, setLumber] = useState(5);
  const [water, setWater] = useState(5);

  const resources = {
    people,
    grain,
    sheep,
    lumber,
    water,
  };
  // const [improvementType, setImprovementType] = useState("");
  const [improvements, setImprovements] = useState([
    { type: "House", level: 1 },
    { type: "Field", level: 1 },
    { type: "Pasture", level: 1 },
    { type: "Lumber Mill", level: 1 },
    { type: "Well", level: 1 },
  ]);

  return (
    <div>
      <Map resources={resources} improvements={improvements}></Map>
      <RescourcesView resources={resources} />
      <AddImprovement improvements={improvements}></AddImprovement>
    </div>
  );
}

export default App;
