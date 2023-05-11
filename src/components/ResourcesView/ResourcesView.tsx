import { useState } from "react"
import "./ResourcesView.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faCloud, faWheatAwn, faTree, faDroplet } from '@fortawesome/free-solid-svg-icons'

export function RescourcesView(props: {resources: any}) {

    

    return (
        <div className="resourcesContainer">
            <table className="resourcesTable">
                <thead>
                    <tr>
                        <th>Resource</th>
                        <th>Available</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>People <FontAwesomeIcon icon={faPerson} /></td>
                        <td>{props.resources.people}</td>
                    </tr>
                    <tr>
                        <td>Grain <FontAwesomeIcon icon={faWheatAwn} /></td>
                        <td>{props.resources.grain}</td>
                    </tr>
                    <tr>
                        <td>Sheep <FontAwesomeIcon icon={faCloud} /></td>
                        <td>{props.resources.sheep}</td>
                    </tr>
                    <tr>
                        <td>Lumber <FontAwesomeIcon icon={faTree} /></td>
                        <td>{props.resources.lumber}</td>
                    </tr>
                    <tr>
                        <td>Water <FontAwesomeIcon icon={faDroplet} /></td>
                        <td>{props.resources.water}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}