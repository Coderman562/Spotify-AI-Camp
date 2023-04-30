import React from 'react';

function ToggleEditModeButton({ editMode, setEditMode }) {
  return (
    <button onClick={() => setEditMode(!editMode)}>
      {editMode ? 'Exit Edit Mode' : 'Enter Edit Mode'}
    </button>
  );
}

export default ToggleEditModeButton;
