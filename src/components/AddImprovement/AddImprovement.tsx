import { useState } from "react";
import { Improvement } from "../../Models/Improvement";

export function AddImprovement(props: { improvements: Improvement[] }) {
  //   const [improvements, setImprovements] = useState([
  //     { type: "House", level: 1 },
  //     { type: "Field", level: 1 },
  //     { type: "Pasture", level: 1 },
  //     { type: "Lumber Mill", level: 1 },
  //     { type: "Well", level: 1 },
  //   ]);

  return (
    <div>
      <form>
        <select>
          {props.improvements.map((improvement) => (
            <option value={improvement.type}>{improvement.type}</option>
          ))}
          {/* <option value={props.improvements[0].type}>House</option>
          <option value={improvements[1].type}>Field</option>
          <option value={improvements[2].type}>Pasture</option>
          <option value={improvements[3].type}>Lumber Mill</option>
          <option value={improvements[4].type}>Well</option> */}
        </select>
      </form>
    </div>
  );
}
