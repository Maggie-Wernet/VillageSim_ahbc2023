import { Props } from "@fortawesome/react-fontawesome";
import { Improvement } from "../../Models/Improvement";
import "./Tile.css";
import { AddImprovement } from "../AddImprovement/AddImprovement";
import { useState, VoidFunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faCloud,
  faWheatAwn,
  faTree,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

export function Tile(props: {
  resources: () => void;
  improvements: Improvement[];
  openModal: () => void;
}) {
  return (
    <div className="tile">
      <button onClick={props.openModal}>
        <FontAwesomeIcon icon={faPerson} />
      </button>
    </div>
  );
}
