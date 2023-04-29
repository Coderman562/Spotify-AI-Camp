import React from 'react';
import '../index.css';

function TableContents({ rowData, onButtonClick }) {
  return (
    <tr>
      <td className="tableData">{rowData.fn ? rowData.fn : '-'}</td>
      <td className="tableData">{rowData.ln ? rowData.ln : '-'}</td>
      <td className="tableData">{rowData.phn ? rowData.phn : '-'}</td>
      <td className="tableData">{rowData.eml ? rowData.eml : '-'}</td>
      <td className="tableData">{rowData.addr ? rowData.addr : '-'}</td>
      <td className="tableData">
        <button onClick={onButtonClick}>View Full Profile</button>
      </td>
    </tr>
  );
}

export default TableContents;
