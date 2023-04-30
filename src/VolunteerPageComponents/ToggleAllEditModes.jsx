// import React from "react";
// import "./ToggleAllEditModes.css";

// function ToggleAllEditModes({ editMode, tableData, toggleEditMode }) {
//   const allRowsInEditMode = tableData.every((item) => editMode[item.uid]);

//   const toggleAllEditModes = () => {
//     console.log("Edit All button clicked"); // Add this line to log when the button is clicked

//     tableData.forEach((item) => {
//       if (!allRowsInEditMode) {
//         if (!editMode[item.uid]) {
//           toggleEditMode(item.uid);
//         }
//       } else {
//         toggleEditMode(item.uid);
//       }
//     });
//   };

//   return (
//     <button onClick={toggleAllEditModes}>
//       {allRowsInEditMode ? "Save All" : "Edit All"}
//     </button>
//   );
// }

// export default ToggleAllEditModes;

import React from "react";
import "./ToggleAllEditModes.css";

function ToggleAllEditModes({ editMode, tableData, toggleEditAllMode }) {
  const allRowsInEditMode = tableData.every((item) => editMode[item.uid]);

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

