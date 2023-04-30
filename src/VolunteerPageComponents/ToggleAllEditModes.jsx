import React from "react";
import "./ToggleAllEditModes.css";

function ToggleAllEditModes({ editMode, tableData, toggleEditMode }) {
    const allRowsInEditMode = tableData.every((item) => editMode[item.uid]);
  
    const toggleAllEditModes = () => {
      tableData.forEach((item) => {
        if (!allRowsInEditMode) {
          if (!editMode[item.uid]) {
            toggleEditMode(item.uid);
          }
        } else {
          toggleEditMode(item.uid);
        }
      });
    };
  
    return (
      <button onClick={toggleAllEditModes}>
        {allRowsInEditMode ? "Save All" : "Edit All"}
      </button>
    );
  }
  
  export default ToggleAllEditModes;
  