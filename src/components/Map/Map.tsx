import { useState } from "react";
import { Improvement } from "../../Models/Improvement";
import { AddImprovement } from "../AddImprovement/AddImprovement";
import { Tile } from "../Tile/Tile";
import "./Map.css"
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Resource } from "../../Models/Resource";

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


export function Map(props: { resources: Resource[], tiles: Improvement[], onSubmitForm: (improvement: Improvement) => void, sendId: (id: number) => void, giveId: number }) {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  Modal.setAppElement('#root');

    return (
      <div className="mapGrid">
        {props.tiles.map((tile) => <Tile key={tile.id} tiles={props.tiles} tile={tile} openModal={() => setIsOpen(true)} sendId={props.sendId}/>)}
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <AddImprovement resources={props.resources} onClose={closeModal} onSubmitForm={props.onSubmitForm} tiles={props.tiles} giveId={props.giveId}/>
      </Modal>
        
      </div>
    );
  }