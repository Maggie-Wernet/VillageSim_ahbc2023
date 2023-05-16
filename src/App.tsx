import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Map } from "./components/Map/Map";
import { RescourcesView } from "./components/ResourcesView/ResourcesView";
import { Improvement } from "./Models/Improvement";
import { AddImprovement } from "./components/AddImprovement/AddImprovement";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    marginLeft: "61px",
    marginTop: "61px",
    width: "255px",
    height: "255px",
    backgroundColor: "#f1f1f1",
    border: "4px solid black"
  },
};

Modal.setAppElement('#root');

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

  const [modalIsOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false);
      }

      function openModal() {
        setIsOpen(true)
      }

      const [addedImprovement, setAddedImprovement] = useState<Improvement>({type: "", level: 1});
      
      console.log(addedImprovement);

      function handleAddedImprovement(improvement: Improvement) {

        setAddedImprovement(improvement);

        if(improvement.type === "House") {
          setPeople(prev => prev + 5)
          setLumber(prev => prev - 5)
          setGrain(prev => prev - 5)
          setWater(prev => prev - 5)
          setSheep(prev => prev - 1)
        } else if(improvement.type === "Field") {
          setGrain(prev => prev + 10)
          setPeople(prev => prev - 1)
          setWater(prev => prev - 2)
        } else if(improvement.type === "Pasture") {
          setSheep(prev => prev + 10)
          setPeople(prev => prev - 1)
          setGrain(prev => prev - 2)
          setWater(prev => prev - 2)
        } else if(improvement.type === "Lumber Mill") {
          setLumber(prev => prev + 10)
          setPeople(prev => prev - 1)
        } else if(improvement.type === "Well") {
          setWater(prev => prev + 10)
          setPeople(prev => prev - 1)
          setLumber(prev => prev - 2)
        }
        
      }

      return (
        <div>
          <Map resources={resources} improvements={improvements} openModal={() => setIsOpen(true)}></Map>
          <RescourcesView resources={resources} />
          <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <AddImprovement improvements={improvements} onSubmitForm={(newImprovement: Improvement) => handleAddedImprovement(newImprovement)} onClose={closeModal}></AddImprovement>
                </Modal>
          
        </div>
      );
    }
    
    export default App;
