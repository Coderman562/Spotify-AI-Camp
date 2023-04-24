import React from 'react';
import '../index.css';

function ProfileEditorPopup({ value, onChange }) {
    return (
        <div className="form-group">
        <label htmlFor="profileEditorPopup" className="form-label">
            Profile Editor Popup
        </label>
        {/* Display profile info, add input box to edit the value of the profile items. Each change in profile item will trigger setState aka tab;eData to change.
        THere will be useEffect upon tableData change to update the change to database */}
        </div>
    );
}

export default ProfileEditorPopup;