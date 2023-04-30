import React from "react";
import "./ToggleAllEditModes.css";

function ToggleAllEditModes({ editMode, tableData, toggleEditAllMode, editAllMode }) {
  const onClickHandler = () => {
    toggleEditAllMode();
  };

  return (
    <button onClick={onClickHandler}>
      {editAllMode ? "Save All" : "Edit All"}
    </button>
  );
}

export default ToggleAllEditModes;
