import { useState } from "react";
import { Improvement } from "../../Models/Improvement";
import "./AddImprovement.css";

export function AddImprovement(props: { improvements: Improvement[] }) {
  //   const [improvements, setImprovements] = useState([
  //     { type: "House", level: 1 },
  //     { type: "Field", level: 1 },
  //     { type: "Pasture", level: 1 },
  //     { type: "Lumber Mill", level: 1 },
  //     { type: "Well", level: 1 },
  //   ]);
  const [benefit, setBenefit] = useState("+5 People");
  const [cost, setCost] = useState("5 lumber, 5 water, 5 grain, 1 sheep");

  return (
    <div className="AddImprovement">
      <form>
        <select>
          <option
            value={props.improvements[0].type}
            onChange={(e) => setBenefit("+5 people")}
          >
            House
          </option>
          <option
            value={props.improvements[1].type}
            onChange={(e) => setBenefit("+10 Grain")}
          >
            Field
          </option>
          <option value={props.improvements[2].type}>Pasture</option>
          <option value={props.improvements[3].type}>Lumber Mill</option>
          <option value={props.improvements[4].type}>Well</option>
          {/* {props.improvements.map((improvement) => (
            <option value={improvement.type}>{improvement.type}</option>
          ))} */}
        </select>
        <h3>
          Benefit: <span>{benefit}</span>
        </h3>
        <h3>
          Cost: <span>{cost}</span>
        </h3>
        <button className="cancel">Cancel</button>
        <button className="add">Add</button>
      </form>
    </div>
  );
}

// function dropdownValue() {
//     // props.improvements.map(improvement => improvement.type)

//     }