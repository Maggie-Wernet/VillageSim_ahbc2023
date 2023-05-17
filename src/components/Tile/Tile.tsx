import { Improvement } from "../../Models/Improvement"
import { AddImprovement } from "../AddImprovement/AddImprovement"
import "./Tile.css"

export function Tile(props: { tiles: Improvement[], tile: Improvement, openModal: () => void, sendId: (id: number) => void}) {

  const handleClick = () => {
    props.openModal();
    props.sendId(props.tile.id)
    console.log(props.tile)
  }
  


  return (
    <div className="tile">
      <button onClick={handleClick}><span>{props.tile.image}</span></button>
    </div>
  )
}