import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Improvement } from "./Models/Improvement";
import { Map } from "./components/Map/Map";
import { RescourcesView } from "./components/ResourcesView/ResourcesView";
import { Resource } from "./Models/Resource";

function App() {
  const [people, setPeople] = useState(0);
  const [grain, setGrain] = useState(5);
  const [sheep, setSheep] = useState(1);
  const [lumber, setLumber] = useState(5);
  const [water, setWater] = useState(5);

  const resources: Resource[] = [
    { type: "People", amount: people },
    { type: "Grain", amount: grain },
    { type: "Sheep", amount: sheep },
    { type: "Lumber", amount: lumber },
    { type: "Water", amount: water },
  ];

  const [tiles, setTiles] = useState<Improvement[]>([
    { id: 1, type: "", level: 0 },
    { id: 2, type: "", level: 0 },
    { id: 3, type: "", level: 0 },
    { id: 4, type: "", level: 0 },
    { id: 5, type: "", level: 0 },
    { id: 6, type: "", level: 0 },
    { id: 7, type: "", level: 0 },
    { id: 8, type: "", level: 0 },
    { id: 9, type: "", level: 0 },
    { id: 10, type: "", level: 0 },
    { id: 11, type: "", level: 0 },
    { id: 12, type: "", level: 0 },
    { id: 13, type: "", level: 0 },
    { id: 14, type: "", level: 0 },
    { id: 15, type: "", level: 0 },
    { id: 16, type: "", level: 0 },
    { id: 17, type: "", level: 0 },
    { id: 18, type: "", level: 0 },
    { id: 19, type: "", level: 0 },
    { id: 20, type: "", level: 0 },
    { id: 21, type: "", level: 0 },
    { id: 22, type: "", level: 0 },
    { id: 23, type: "", level: 0 },
    { id: 24, type: "", level: 0 },
    { id: 25, type: "", level: 0 },
  ]);

  const [tileId, setTileId] = useState(0);
  const [tileType, setTileType] = useState("");
  const [tileLevel, setTileLevel] = useState(0);

  const [addedImprovement, setAddedImprovement] = useState<Improvement>({
    id: 0,
    type: "",
    level: 1,
  });

  function handleAddedImprovement(improvement: Improvement) {
    setTiles((prevTiles) =>
      prevTiles.map((tile) =>
        tile.id === improvement.id ? { ...tile, ...improvement } : tile
      )
    );

    setAddedImprovement(improvement);

    if (improvement.type === "House") {
      if (lumber >= 5 && grain >= 5 && water >= 5 && sheep >= 1) {
        setPeople((prev) => prev + 5);
        setLumber((prev) => prev - 5);
        setGrain((prev) => prev - 5);
        setWater((prev) => prev - 5);
        setSheep((prev) => prev - 1);
      } else {
        console.log("warning: you don't have enough resources");
        return; //display an error message
      }
    } else if (improvement.type === "Field") {
      if (people >= 1 && water >= 2) {
        setGrain((prev) => prev + 10);
        setPeople((prev) => prev - 1);
        setWater((prev) => prev - 2);
      } else {
        return; //display an error message
      }
    } else if (improvement.type === "Pasture") {
      if (people >= 1 && grain >= 2 && water >= 2) {
        setSheep((prev) => prev + 10);
        setPeople((prev) => prev - 1);
        setGrain((prev) => prev - 2);
        setWater((prev) => prev - 2);
      } else {
        return;
      }
    } else if (improvement.type === "Lumber Mill") {
      if (people >= 1) {
        setLumber((prev) => prev + 10);
        setPeople((prev) => prev - 1);
      } else {
        return;
      }
    } else if (improvement.type === "Well") {
      if (people >= 1 && lumber >= 2) {
        setWater((prev) => prev + 10);
        setPeople((prev) => prev - 1);
        setLumber((prev) => prev - 2);
      } else {
        return;
      }
    }
  }

  function handleEditedImprovement(improvement: Improvement) {
    setTiles((prevTiles) =>
      prevTiles.map((tile) =>
        tile.id === improvement.id ? { ...tile, ...improvement } : tile
      )
    );

    setAddedImprovement(improvement);

    if (improvement.type === "House") {
      if (lumber >= 5 && grain >= 5 && water >= 5 && sheep >= 1) {
        setPeople((prev) => prev + 5);
        setLumber((prev) => prev - 5);
        setGrain((prev) => prev - 5);
        setWater((prev) => prev - 5);
        setSheep((prev) => prev - 1);
      } else {
        console.log("warning: you don't have enough resources");
        return; //display an error message
      }
    } else if (improvement.type === "Field") {
      if (people >= 1 && water >= 2) {
        setGrain((prev) => prev + 10);
        setPeople((prev) => prev - 1);
        setWater((prev) => prev - 2);
      } else {
        return; //display an error message
      }
    } else if (improvement.type === "Pasture") {
      if (people >= 1 && grain >= 2 && water >= 2) {
        setSheep((prev) => prev + 10);
        setPeople((prev) => prev - 1);
        setGrain((prev) => prev - 2);
        setWater((prev) => prev - 2);
      } else {
        return;
      }
    } else if (improvement.type === "Lumber Mill") {
      if (people >= 1) {
        setLumber((prev) => prev + 10);
        setPeople((prev) => prev - 1);
      } else {
        return;
      }
    } else if (improvement.type === "Well") {
      if (people >= 1 && lumber >= 2) {
        setWater((prev) => prev + 10);
        setPeople((prev) => prev - 1);
        setLumber((prev) => prev - 2);
      } else {
        return;
      }
    }
  }

  return (
    <div>
      <div className="App">
        <Map
          resources={resources}
          tiles={tiles}
          onSubmitForm={handleAddedImprovement}
          sendId={setTileId}
          giveId={tileId}
          sendType={setTileType}
          sendLevel={setTileLevel}
          giveType={tileType}
          giveLevel={tileLevel}
          onSubmitEdit={handleEditedImprovement}
        />
        <RescourcesView resources={resources} />
      </div>
    </div>
  );
}

export default App;
