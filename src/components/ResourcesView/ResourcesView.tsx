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
                        props.resources.map((resource, i) => <tr key={i}><td>{resource.type}<img src={resource.image}/></td><td>{resource.amount}</td></tr>)
                    }
                </tbody>
            </table>
        </div>
    )

}