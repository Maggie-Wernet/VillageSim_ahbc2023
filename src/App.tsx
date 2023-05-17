import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Map } from "./components/Map/Map";
import { RescourcesView } from "./components/ResourcesView/ResourcesView";
import { Improvement } from "./Models/Improvement";
import { AddImprovement } from "./components/AddImprovement/AddImprovement";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBucket,
  faCow,
  faTree,
  faTractor,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const improvementImages = [faBucket, faCow, faTree, faTractor, faHouse];

const customStyles = {
  content: {
    marginLeft: "61px",
    marginTop: "61px",
    width: "255px",
    height: "255px",
    backgroundColor: "#f1f1f1",
    border: "4px solid black",
  },
};

Modal.setAppElement("#root");

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
    { type: "House", level: 1 }, //house
    { type: "Field", level: 1 }, //tractor
    { type: "Pasture", level: 1 }, //cow
    { type: "Lumber Mill", level: 1 }, //axe
    { type: "Well", level: 1 }, //bucket
  ]);

  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [addedImprovement, setAddedImprovement] = useState<Improvement>({
    type: "",
    level: 1,
  });

  console.log(addedImprovement);

  function handleAddedImprovement(improvement: Improvement) {
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
      <Map
        resources={resources}
        improvements={improvements}
        openModal={() => setIsOpen(true)}
      ></Map>
      <RescourcesView resources={resources} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <AddImprovement
          resources={resources}
          improvements={improvements}
          onSubmitForm={(newImprovement: Improvement) =>
            handleAddedImprovement(newImprovement)
          }
          onClose={closeModal}
        ></AddImprovement>
      </Modal>
    </div>
  );
}

export default App;
