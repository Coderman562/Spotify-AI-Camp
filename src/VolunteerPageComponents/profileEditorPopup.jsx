import React from 'react';
import '../index.css';

function ProfileEditorPopup({ rowData, onClose }) {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="popup-header">
          <h3 className="popup-title">User Information</h3>
        </div>
        <p className="user-info"><strong>User ID:</strong> {rowData.user_doc_id}</p>
        <p className="user-info"><strong>Name:</strong> {rowData.firstName} {rowData.lastName}</p>
        <p className="user-info"><strong>Phone Number:</strong> {rowData.phoneNumber}</p>
        <p className="user-info"><strong>Email:</strong> {rowData.email}</p>
        <p className="user-info"><strong>Address:</strong> {rowData.address}</p>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProfileEditorPopup;
