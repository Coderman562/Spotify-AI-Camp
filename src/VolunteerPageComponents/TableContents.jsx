import React, { useState } from 'react';
import './TableContents.css';

function TableContents({ rowData, onButtonClick, tableConfig }) {
  const [editMode, setEditMode] = useState(false);

  const renderDataOrInput = (key, configKey) => {
    return (
      <td className="tableData">
        {editMode ? (
          <input
            className="tableDataInput"
            type="text"
            value={rowData[key] ? rowData[key] : ''}
            onChange={(e) => console.log('Handle input change here')}
          />
        ) : (
          rowData[key] ? rowData[key] : '-'
        )}
      </td>
    );
  };

  return (
    <tr>
      {tableConfig.showFirstName && (
        <>{renderDataOrInput('fn', 'showFirstName')}</>
      )}
      {tableConfig.showLastName && (
        <>{renderDataOrInput('ln', 'showLastName')}</>
      )}
      {tableConfig.showPhoneNumber && (
        <>{renderDataOrInput('phn', 'showPhoneNumber')}</>
      )}
      {tableConfig.showEmail && (
        <>{renderDataOrInput('eml', 'showEmail')}</>
      )}
      {tableConfig.showAddress && (
        <>{renderDataOrInput('addr', 'showAddress')}</>
      )}
      <td className="tableData">
        <button onClick={onButtonClick}>View Full Profile</button>
        <button onClick={() => setEditMode(!editMode)}>
          {editMode ? 'Save' : 'Edit'}
        </button>
      </td>
    </tr>
  );
}

export default TableContents;
