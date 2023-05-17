import { Resource } from "../../Models/Resource"
import "./ResourcesView.css"

export function RescourcesView(props: {resources: Resource[]}) {

    

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
                    {
                        props.resources.map(resource => <tr><td>{resource.type}</td><td>{resource.amount}</td></tr>)
                    }
                </tbody>
            </table>
        </div>
    )

}