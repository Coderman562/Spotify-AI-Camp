import React from 'react';
import '../index.css';

function ProfileEditorPopup(props){
  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="popup-header">
          <h3 className="popup-title">User Information</h3>
        </div>
        <p className="user-info"><strong>User ID:</strong> {props.user_doc_id}</p>
        <p className="user-info"><strong>Name:</strong> {props.firstName} {props.lastName}</p>
        <p className="user-info"><strong>Phone Number:</strong> {props.phoneNumber}</p>
        <p className="user-info"><strong>Email:</strong> {props.email}</p>
        <p className="user-info"><strong>Address:</strong> {props.address}</p>
        {/* Function passed in to change closed state */}
        {/* <button className="close-btn" onClick={props.onClose}>Close</button> */}
      </div>
    </div>
  );
};

export default ProfileEditorPopup;
