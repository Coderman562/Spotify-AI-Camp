import React, { useEffect, useState } from 'react';
import './ProfileEditorPopup.css';

function ProfileEditorPopup({ rowData, onClose, logData }) {

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const logItems = logData.map((log, index) => (
    <li key={index} className="log-item">
      <p>
        <strong>Start Time:</strong> {log.st || '-'}
      </p>
      <p>  
        <strong>End Time:</strong> {log.et || '-'}
      </p>
    </li>
  ));

  return (
    <div className="popup-container" onClick={onClose}>
      <div className="popup-content" onClick={handleContentClick}>
        <div className="popup-header">
          <h3 className="popup-title">User Information</h3>
        </div>
        <p className="user-info">
          <strong>Name:</strong> {rowData.fn || '-'} {rowData.ln || '-'}
        </p>
        <p className="user-info">
          <strong>Phone Number:</strong> {rowData.phn || '-'}
        </p>
        <p className="user-info">
          <strong>Email:</strong> {rowData.eml || '-'}
        </p>
        <p className="user-info">
          <strong>Address:</strong> {rowData.addr || '-'}
        </p>
        <div className="log-container">
          <h4>Logs:</h4>
          <ul className="log-list">
            {logItems}
          </ul>
        </div>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default ProfileEditorPopup;
