import { Tile } from "../Tile/Tile";
import "./Map.css"

export function Map(props: {resources: any} ) {
    return (
        <div className="mapGrid">

            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            <Tile resources={props.resources}></Tile>
            
            
        </div>
    )
}