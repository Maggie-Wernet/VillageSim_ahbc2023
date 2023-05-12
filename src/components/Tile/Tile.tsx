import { Props } from "@fortawesome/react-fontawesome";
import { Improvement } from "../../Models/Improvement";
import "./Tile.css";
import { AddImprovement } from "../AddImprovement/AddImprovement";
import { useState } from "react";

export function Tile(props: {
  resources: () => void;
  improvements: Improvement[];
  openModal: () => void
}) {
    



  return (
    <div className="tile">
      <button onClick={props.openModal}></button>
    </div>
  );
}
