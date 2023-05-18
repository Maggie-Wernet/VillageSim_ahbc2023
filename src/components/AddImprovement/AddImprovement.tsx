import { useState } from "react";
import "./AddImprovement.css";
import { Improvement } from "../../Models/Improvement";
import { Resource } from "../../Models/Resource";
import houseImage from "../../images/house.png"
import fieldImage from "../../images/field.png"
import pastureImage from "../../images/pasture.png"
import lumberImage from "../../images/lumbermill.png"
import wellImage from "../../images/well.png"

export function AddImprovement(props: {
  resources: Resource[];
  onClose: () => void;
  tiles: Improvement[];
  onSubmitForm: (improvement: Improvement) => void;
  giveId: number;
}) {
  const [benefit, setBenefit] = useState("");
  const [cost, setCost] = useState("");
  const [selected, setSelected] = useState("");
  const [tileId, setTileId] = useState("");
  const [image, setImage] = useState("hello");

  function handleSelect(e: any) {
    setSelected(e.target.value);

    if (e.target.value === "House") {
      setBenefit("+5 People");
      setCost("-5 Lumber, -5 Water, -5 Grain, -1 Sheep");
      setImage(houseImage);
    } else if (e.target.value === "Field") {
      setBenefit("+10 Grain");
      setCost("-1 Person, -2 Water");
      setImage(fieldImage);
    } else if (e.target.value === "Pasture") {
      setBenefit("+10 Sheep");
      setCost("-1 Person, -2 Grain, -2 Water");
      setImage(pastureImage);
    } else if (e.target.value === "Lumber Mill") {
      setBenefit("+10 Lumber");
      setCost("-1 Person");
      setImage(lumberImage)
    } else if (e.target.value === "Well") {
      setBenefit("+10 Water");
      setCost("-1 Person, -2 Lumber");
      setImage(wellImage)
    }
    
  }

  function handleFormSubmit(e: any) {
    e.preventDefault();

    const addedImprovement: Improvement = {
      id: props.giveId,
      type: selected,
      level: 1,
      image: image,
    };

    props.onSubmitForm(addedImprovement);

    props.onClose();
  }

  function handleHouseDisable() {
    if (
      props.resources[1].amount < 5 ||
      props.resources[2].amount < 1 ||
      props.resources[3].amount < 5 ||
      props.resources[4].amount < 5
    ) {
      return true;
    }
  }
  function handleFieldDisable() {
    if (props.resources[0].amount < 1 || props.resources[4].amount < 2) {
      return true;
    }
  }
  function handlePastureDisable() {
    if (
      props.resources[0].amount < 1 ||
      props.resources[1].amount < 2 ||
      props.resources[4].amount < 2
    ) {
      return true;
    }
  }
  function handleLumberDisable() {
    if (props.resources[0].amount < 1) {
      return true;
    }
  }
  function handleWellDisable() {
    if (props.resources[0].amount < 1 || props.resources[3].amount < 2) {
      return true;
    }
  }

  return (
    <div className="AddImprovement">
      <form onSubmit={handleFormSubmit}>
        <select className="AddImprovementSelect" onChange={handleSelect}>
          <option selected disabled hidden value={""}>
            Choose one
          </option>
          <option disabled={handleHouseDisable()} value={"House"}>
            House
          </option>
          <option disabled={handleFieldDisable()} value={"Field"}>
            Field
          </option>
          <option disabled={handlePastureDisable()} value={"Pasture"}>
            Pasture
          </option>
          <option disabled={handleLumberDisable()} value={"Lumber Mill"}>
            Lumber Mill
          </option>
          <option disabled={handleWellDisable()} value={"Well"}>
            Well
          </option>
        </select>
        <h3 className="AddImprovementSpan">
          Benefit: <span>{benefit}</span>
        </h3>
        <h3 className="AddImprovementSpan">
          Cost: <span>{cost}</span>
        </h3>
        <div className="AddImprovementBtnContainer">
          <button
            type="button"
            className="AddImprovementBtn cancel"
            onClick={() => props.onClose()}
          >
            Cancel
          </button>
          <button disabled={selected === ""} className="AddImprovementBtn add">Add</button>
        </div>
      </form>
    </div>
  );
}
