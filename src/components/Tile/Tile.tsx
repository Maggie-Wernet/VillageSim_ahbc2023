import { Props } from "@fortawesome/react-fontawesome";
import { Improvement } from "../../Models/Improvement";
import "./Tile.css";

export function Tile(props: {
  resources: () => void;
  improvements: Improvement[];
}) {
  return (
    <div className="tile">
      <button></button>
    </div>
  );
}
