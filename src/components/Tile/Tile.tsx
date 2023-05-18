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
  sendImage: (image: string) => void;
}) {
  const handleClick = () => {
    if (props.tile.type !== "") {
      props.openModalEdit();
      props.sendId(props.tile.id)
      props.sendType(props.tile.type);
      props.sendLevel(props.tile.level);
      props.sendImage(props.tile.image);
      console.log(props.tile)
    } else {
      props.openModal();
      props.sendId(props.tile.id);
      console.log(props.tile);
    }
  };

  return (
    <div className="tile">
      <button onClick={handleClick}>
        <img src={props.tile.image}/>
        <span>{props.tile.level > 0 ? props.tile.level : ""}</span>
      </button>
    </div>
  );
}
