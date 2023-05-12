import { useState } from "react";
import { Improvement } from "../../Models/Improvement";
import "./AddImprovement.css";

export function AddImprovement(props: { improvements: Improvement[], onSubmitForm: (improvement: Improvement) => void, onClose: () => void }) {
  //   const [improvements, setImprovements] = useState([
  //     { type: "House", level: 1 },
  //     { type: "Field", level: 1 },
  //     { type: "Pasture", level: 1 },
  //     { type: "Lumber Mill", level: 1 },
  //     { type: "Well", level: 1 },
  //   ]);
  const [benefit, setBenefit] = useState("+5 People");
  const [cost, setCost] = useState("-5 Lumber, -5 Water, -5 Grain, -1 Sheep");
  const [selected, setSelected] = useState("House");

  function handleSelect(e: any) {
    setSelected(e.target.value)

    if (e.target.value === "House") {
        setBenefit("+5 People");
        setCost("-5 Lumber, -5 Water, -5 Grain, -1 Sheep")
    } else if (e.target.value === "Field") {
        setBenefit("+10 Grain")
        setCost("-1 Person, -2 Water")
    } else if (e.target.value === "Pasture") {
        setBenefit("+10 Sheep")
        setCost("-1 Person, -2 Grain, -2 Water")
    } else if (e.target.value === "Lumber Mill") {
        setBenefit("+10 Lumber")
        setCost("-1 Person")
    } else if (e.target.value === "Well") {
        setBenefit("+10 Water")
        setCost("-1 Person, -2 Lumber")
    }
}

function handleFormSubmit(e: any) {
    e.preventDefault();

    props.onClose()

}

return (
  <div className="AddImprovement">
      <form>
          <select className="AddImprovementSelect" defaultValue={props.improvements[0].type} onChange={handleSelect}>
              <option value={props.improvements[0].type}>House</option>
              <option value={props.improvements[1].type}>Field</option>
              <option value={props.improvements[2].type}>Pasture</option>
              <option value={props.improvements[3].type}>Lumber Mill</option>
              <option value={props.improvements[4].type}>Well</option>
              {/* {props.improvements.map((improvement) => (
      <option value={improvement.type}>{improvement.type}</option>
    ))} */}
          </select>
          <h3 className="AddImprovementSpan">
              Benefit: <span>{benefit}</span>
          </h3>
          <h3 className="AddImprovementSpan">
              Cost: <span>{cost}</span>
          </h3>
          <div className="AddImprovementBtnContainer">
              <button className="AddImprovementBtn cancel" onClick={() => props.onClose()}>Cancel</button>
              <button className="AddImprovementBtn add" onSubmit={handleFormSubmit}>Add</button>
          </div>
      </form>
  </div>
);
}

// function dropdownValue() {
//     // props.improvements.map(improvement => improvement.type)

//     }
