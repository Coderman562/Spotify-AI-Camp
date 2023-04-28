import React from 'react';
import '../index.css';

function TableContents({ rowData, onButtonClick }) {
  return (
    <tr>
      <td className="tableData">{rowData.user_doc_id}</td>
      <td className="tableData">{rowData.firstName}</td>
      <td className="tableData">{rowData.lastName}</td>
      <td className="tableData">{rowData.phoneNumber}</td>
      <td className="tableData">{rowData.email}</td>
      <td className="tableData">{rowData.address}</td>
      <td className="tableData">
        <button onClick={onButtonClick}>View Full Profile</button>
      </td>
    </tr>
  );
}

export default TableContents;
