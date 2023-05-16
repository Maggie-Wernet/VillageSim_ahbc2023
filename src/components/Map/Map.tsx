import { Improvement } from "../../Models/Improvement";
import { Tile } from "../Tile/Tile";
import "./Map.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faCloud,
  faWheatAwn,
  faTree,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

export function Map(props: {
  resources: any;
  improvements: Improvement[];
  openModal: () => void;
}) {
  return (
    <div className="mapGrid">
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
      <Tile
        resources={props.resources}
        improvements={props.improvements}
        openModal={props.openModal}
      ></Tile>
    </div>
  );
}
