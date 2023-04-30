import React, { useEffect, useState } from "react";
import "./ToggleAllEditModes.css";

function ToggleAllEditModes({ editMode, tableData, toggleEditAllMode }) {
  const [allRowsInEditMode, setAllRowsInEditMode] = useState(false);

  useEffect(() => {
    setAllRowsInEditMode(tableData.every((item) => editMode[item.uid]));
  }, [editMode, tableData]);

  const onClickHandler = () => {
    toggleEditAllMode();
  };

  return (
    <button onClick={onClickHandler}>
      {allRowsInEditMode ? "Save All" : "Edit All"}
    </button>
  );
}

export default ToggleAllEditModes;
