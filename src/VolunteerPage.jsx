import React, { useEffect, useState } from 'react';
import './index.css';
import TableContents from './VolunteerPageComponents/TableContents.jsx';
import TableHeader from './VolunteerPageComponents/TableHeader.jsx';
import ProfileEditorPopup from './VolunteerPageComponents/ProfileEditorPopup.jsx';
import ShowTableItems from './VolunteerPageComponents/ShowTableItems.jsx';
import ToggleAllEditModes from './VolunteerPageComponents/ToggleAllEditModes.jsx';

const tableDataEx = [
  {
    user_doc_id: '1',
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '555-123-4567',
    email: 'john.doe@example.com',
    address: '123 Main St, Anytown, USA'
  },
  {
    user_doc_id: '2',
    firstName: 'Jane',
    lastName: 'Doe',
    phoneNumber: '555-987-6543',
    email: 'jane.doe@example.com',
    address: '456 Elm St, Anytown, USA' 
  }
  // Add more data rows as needed
];

function VolunteerPage() {
  const [tableData, setTableData] = useState([]);
  const [logData, setLogData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null); 
  const [showPopup, setShowPopup] = useState(false);
  const [tableConfig, setTableConfig] = useState({
    // showUser_doc_id: true,
    showFirstName: true,
    showLastName: true,
    showPhoneNumber: true,
    showEmail: true,
    showAddress: true
  });
  const [editMode, setEditMode] = useState({});
  const [editAllMode, setEditAllMode] = useState(false);

  console.log(editMode);

  const closePopup = () => {
    setShowPopup(false);
  };

  const toggleEditMode = (uid) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [uid]: !prevEditMode[uid],
    }));
  };

  const toggleEditAllMode = () => {
    const newEditMode = {};

    tableData.forEach((row) => {
      newEditMode[row.uid] = !editAllMode;
    });

    console.log(newEditMode);

    setEditMode(newEditMode);
    setEditAllMode(!editAllMode);
  };

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        console.log("starting fetch")
        const response = await fetch('/api/get-table-data');
        const data = await response.json();
        setTableData(data);
        console.log("fetched data")
        
      } catch (error) {
        console.error('Error fetching table data:', error);
      }
    };

    fetchTableData();
  }, []);

  useEffect(() => {
    if (showPopup && selectedRow) {
      const fetchLogData = async () => {
        try {
          console.log("starting fetch log");
          const response = await fetch(`/api/get-log-stats?uid=${selectedRow.uid}`);
          const data = await response.json();
          setLogData(data);
          console.log("fetched data log");
        } catch (error) {
          console.error("Error fetching log data:", error);
        }
      };
  
      fetchLogData();
    }
  }, [showPopup, selectedRow]);
  

  console.log(tableData)

  const tableRows = tableData
  ? tableData.map((item) => (
      <TableContents
        key={item.uid}
        rowData={item}
        tableConfig={tableConfig}
        onButtonClick={() => {
          setSelectedRow(item);
          setShowPopup(true);
        }}
        editMode={editMode}
        toggleEditMode={toggleEditMode}
        editAllMode={editAllMode}
      />
    ))
  : null;

  return (
    <div className="tableContainer">
      <ShowTableItems
        tableConfig={tableConfig}
        setTableConfig={setTableConfig}
      />
      {tableData.length > 0 && (
        <ToggleAllEditModes
          toggleEditAllMode={toggleEditAllMode}
          editAllMode={editAllMode}
        />
      )}
      <table className="dataTable">
        <thead className="tableHeader">
          <TableHeader tableConfig={tableConfig} />
        </thead>
        <tbody className="tableBody">{tableRows}</tbody>
      </table>
      {showPopup && selectedRow && (
        <ProfileEditorPopup rowData={selectedRow} onClose={closePopup} logData={logData} />
      )}
    </div>
  );
}

export default VolunteerPage;
