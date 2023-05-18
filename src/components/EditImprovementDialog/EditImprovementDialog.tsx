import { NumericLiteral } from "typescript";
import { Improvement } from "../../Models/Improvement";

export function EditImprovementDialog(props: {
  onCloseEdit: () => void;
  tiles: Improvement[];
  giveId: number;
  giveType: string;
  giveLevel: number;
  onSubmitEdit: (improvement: Improvement) => void;
}) {
  function handleFormSubmit(e: any) {
    e.preventDefault();

    const addedImprovement: Improvement = {
      id: props.giveId,
      type: props.giveType,
      level: props.giveLevel + 1,
      image: props.giveType,
    };

    props.onSubmitEdit(addedImprovement);

    props.onCloseEdit();
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h3 className="AddImprovementSpan">
          Type: <span>{props.giveType}</span>
        </h3>
        <h3 className="AddImprovementSpan">
          Level: <span>{props.giveLevel}</span>
        </h3>
        <h3 className="AddImprovementSpan">
          Benefit: <span></span>
        </h3>
        <h3 className="AddImprovementSpan">
          Cost: <span></span>
        </h3>
        <div className="AddImprovementBtnContainer">
          <button
            type="button"
            className="AddImprovementBtn cancel"
            onClick={() => props.onCloseEdit()}
          >
            Cancel
          </button>
          <button className="AddImprovementBtn add">Add</button>
        </div>
      </form>
    </div>
  );
}
