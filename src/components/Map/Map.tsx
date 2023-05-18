import { useState } from "react";
import { Improvement } from "../../Models/Improvement";
import { AddImprovement } from "../AddImprovement/AddImprovement";
import { Tile } from "../Tile/Tile";
import "./Map.css";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { Resource } from "../../Models/Resource";
import { EditImprovementDialog } from "../EditImprovementDialog/EditImprovementDialog";

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

const customStyles2 = {
  content: {
    marginLeft: "10px",
    marginTop: "10px",
    width: "350px",
    height: "360px",
    backgroundColor: "#f1f1f1",
    border: "4px solid black",
  },
};

export function Map(props: {
  resources: Resource[];
  tiles: Improvement[];
  onSubmitForm: (improvement: Improvement) => void;
  sendId: (id: number) => void;
  giveId: number;
  sendType: (type: string) => void;
  sendLevel: (level: number) => void;
  giveType: string;
  giveLevel: number;
  sendImage: (image: string) => void;
  giveImage: string;
  onUpgrade: (improvement: Improvement) => void;
  onDowngrade: (improvement: Improvement) => void;
  onRemove: (improvement: Improvement) => void;
}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModalEdit() {
    setModalEditIsOpen(true);
  }

  function closeModalEdit() {
    setModalEditIsOpen(false);
  }

  Modal.setAppElement("#root");

  return (
    <div className="mapGrid">
      {props.tiles.map((tile) => (
        <Tile
          key={tile.id}
          tiles={props.tiles}
          tile={tile}
          openModal={() => setIsOpen(true)}
          openModalEdit={() => setModalEditIsOpen(true)}
          sendId={props.sendId}
          sendType={props.sendType}
          sendLevel={props.sendLevel}
          sendImage={props.sendImage}
        />
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <AddImprovement
          resources={props.resources}
          onClose={closeModal}
          onSubmitForm={props.onSubmitForm}
          tiles={props.tiles}
          giveId={props.giveId}
        />
      </Modal>
      <Modal
        isOpen={modalEditIsOpen}
        onRequestClose={closeModalEdit}
        style={customStyles2}
        contentLabel="Example Modal"
      >
        <EditImprovementDialog
          onCloseEdit={closeModalEdit}
          tiles={props.tiles}
          giveType={props.giveType}
          giveLevel={props.giveLevel}
          onUpgrade={props.onUpgrade}
          onDowngrade={props.onDowngrade}
          giveId={props.giveId}
          giveImage={props.giveImage}
          onRemove={props.onRemove}
          resources={props.resources}
        />
      </Modal>
    </div>
  );
}
