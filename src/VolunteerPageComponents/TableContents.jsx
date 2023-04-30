import React from 'react';
import './TableContents.css';

function TableContents({ rowData, onButtonClick, tableConfig }) {
  return (
    <tr>
      {tableConfig.showFirstName && (
        <td className="tableData">{rowData.fn ? rowData.fn : '-'}</td>
      )}
      {tableConfig.showLastName && (
        <td className="tableData">{rowData.ln ? rowData.ln : '-'}</td>
      )}
      {tableConfig.showPhoneNumber && (
        <td className="tableData">{rowData.phn ? rowData.phn : '-'}</td>
      )}
      {tableConfig.showEmail && (
        <td className="tableData">{rowData.eml ? rowData.eml : '-'}</td>
      )}
      {tableConfig.showAddress && (
        <td className="tableData">{rowData.addr ? rowData.addr : '-'}</td>
      )}
      <td className="tableData">
        <button onClick={onButtonClick}>View Full Profile</button>
      </td>
    </tr>
  );
}

export default TableContents;