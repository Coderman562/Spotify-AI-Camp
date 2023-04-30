import React from 'react';
import './TableContents.css';

function TableContents({rowData, tableConfig, onButtonClick, editMode, toggleEditMode, editAllMode}) {

  const isEditMode = editMode[rowData.uid] || false;

  const renderDataOrInput = (key, configKey) => {
    return (
      <td className="tableData">
        {isEditMode ? (
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

  // console.log(editAllMode)

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
      <td>
        <button onClick={onButtonClick}>View Full Profile</button>
      </td>
      <td>
        {!editAllMode && (
          isEditMode ? (
            <button onClick={() => toggleEditMode(rowData.uid)}>Save</button>
          ) : (
            <button onClick={() => toggleEditMode(rowData.uid)}>Edit</button>
          )
        )}
      </td>
    </tr>
  );
}

export default TableContents;
