import { NumericLiteral } from "typescript";
import { Improvement } from "../../Models/Improvement";
import { Resource } from "../../Models/Resource";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./EditImprovementDialog.css"

export function EditImprovementDialog(props: {
  onCloseEdit: () => void;
  tiles: Improvement[];
  giveId: number;
  giveType: string;
  giveLevel: number;
  giveImage: string;
  onUpgrade: (improvement: Improvement) => void;
  onDowngrade: (improvement: Improvement) => void;
  onRemove: (improvement: Improvement) => void;
  resources: Resource[];
}) {

  const [benefit, setBenefit] = useState("")
  const [cost, setCost] = useState("")

  function handleUpgrade(e: any) {
    e.preventDefault();

    const addedImprovement: Improvement = {
      id: props.giveId,
      type: props.giveType,
      level: props.giveLevel + 1,
      image: props.giveImage,
    };

    props.onUpgrade(addedImprovement);

    props.onCloseEdit();
  }
  function handleDowngrade(e: any) {
    e.preventDefault();

    const addedImprovement: Improvement = {
      id: props.giveId,
      type: props.giveType,
      level: props.giveLevel - 1,
      image: props.giveImage,
    };

    props.onDowngrade(addedImprovement);

    props.onCloseEdit();
  }
  function handleRemove(e: any) {
    e.preventDefault();

    const addedImprovement: Improvement = {
      id: props.giveId,
      type: "",
      level: 0,
      image: "",
    };

    props.onUpgrade(addedImprovement);

    props.onCloseEdit();
  }

  function handleUpgradeDisable() {
    if (props.giveType === "House") {
      if (
        props.resources[1].amount < 5 ||
        props.resources[2].amount < 1 ||
        props.resources[3].amount < 5 ||
        props.resources[4].amount < 5
      ) {
        return true;
      }
    } else if (props.giveType === "Field") {
      if (props.resources[0].amount < 1 || props.resources[4].amount < 2) {
        return true;
      }
    } else if (props.giveType === "Pasture") {
      if (
        props.resources[0].amount < 1 ||
        props.resources[1].amount < 2 ||
        props.resources[4].amount < 2
      ) {
        return true;
      }
    } else if (props.giveType === "Lumber Mill") {
      if (props.resources[0].amount < 1) {
        return true;
      }
    } else if (props.giveType === "Well") {
      if (props.resources[0].amount < 1 || props.resources[3].amount < 2) {
        return true;
      }
    } else {
      return false;
    }
  }

  function handleDowngradeDisable() {
    if (props.giveLevel === 1) {
      return true;
    }
  }


  return (
    <div>
      <div className="editHeader">
        <h3 className="AddImprovementSpan">
          Type: <span>{props.giveType}</span>
        </h3>
        <h3 className="AddImprovementSpan">
          Level: <span>{props.giveLevel}</span>
        </h3>
      </div>
      <h3 className="AddImprovementSpan">
        Upgrade: <span>This will build another {props.giveType} on this tile.</span>
      </h3>
      <h3 className="AddImprovementSpan">
        Downgrade: <span>This will remove one {props.giveType} from this tile.</span>
      </h3>
      <h3 className="AddImprovementSpan">
        Remove: <span>This will remove every {props.giveType} on this tile.</span>
      </h3>
      <div className="AddImprovementBtnContainer">
        <button
          type="button"
          className="AddImprovementBtn cancel"
          onClick={() => props.onCloseEdit()}
        >
          Cancel
        </button>
        <button
          className="AddImprovementBtn add"
          onClick={handleUpgrade}
          disabled={handleUpgradeDisable()}
        >
          Upgrade
        </button>
        <button
          className="AddImprovementBtn add"
          onClick={handleDowngrade}
          disabled={handleDowngradeDisable()}
        >
          Downgrade
        </button>
        <button className="AddImprovementBtn add" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}
