import { Improvement } from "../../Models/Improvement";
import { AddImprovement } from "../AddImprovement/AddImprovement";
import "./Tile.css";

export function Tile(props: {
  tiles: Improvement[];
  tile: Improvement;
  openModalEdit: () => void;
  openModal: () => void;
  sendId: (id: number) => void;
  sendType: (type: string) => void;
  sendLevel: (level: number) => void;
}) {
  const handleClick = () => {
    if (props.tile.type !== "") {
      props.openModalEdit();
      props.sendType(props.tile.type);
      props.sendLevel(props.tile.level);
    } else {
      props.openModal();
      props.sendId(props.tile.id);
      console.log(props.tile);
    }
  };

  return (
    <div className="tile">
      <button onClick={handleClick}>
        <span>{props.tile.image}</span>
        <span>{props.tile.level}</span>
      </button>
    </div>
  );
}
