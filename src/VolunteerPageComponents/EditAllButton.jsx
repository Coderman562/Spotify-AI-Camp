import React from "react";
import "./EditAllButton.css";

function EditAllButton({toggleEditAllMode, editAllMode }) {
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

export default EditAllButton;
