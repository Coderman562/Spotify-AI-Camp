import React from "react";
import "./ToggleAllEditModes.css";

function ToggleAllEditModes({toggleEditAllMode, editAllMode }) {
  const onClickHandler = () => {
    toggleEditAllMode();
  };

  return (
    <button
      onClick={onClickHandler}
      className={`toggleAllEditModesButton`}
    >
      {editAllMode ? "Save All" : "Edit Mode"}
    </button>
  );
}

export default ToggleAllEditModes;
