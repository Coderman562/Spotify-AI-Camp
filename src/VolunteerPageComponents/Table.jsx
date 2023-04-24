import React from 'react';
import '../index.css';
import profileEditorPopup from './profileEditorPopup.jsx';

function Table(props) {
    return (
        <div>
        // Add configuration in this file, in relation to the TableHeader to tell program what heading to show based on their configuration - sent in from props. Use state to manage this
        <tr>
            <td className="tableData">{props.user_doc_id}</td>
            <td className="tableData">{props.firstName}</td>
            <td className="tableData">{props.lastName}</td>
            <td className="tableData">{props.phoneNumber}</td>
            <td className="tableData">{props.email}</td>
            <td className="tableData">{props.address}</td>
            <button>Edit Profile</button>
            {/* display fullProfilePopup */}
            <button>View Full Profile</button>
        </tr>
        {/* input props items from Table here */}
        <profileEditorPopup />
        </div>
    );
}

export default Table;
