import React, { useEffect, useState } from 'react';
import './index.css';
import TableContents from './VolunteerPageComponents/TableContents.jsx';
import TableHeader from './VolunteerPageComponents/TableHeader.jsx';
import ProfileEditorPopup from './VolunteerPageComponents/ProfileEditorPopup.jsx';

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
  const [tableData, setTableData] = useState(tableDataEx);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // const [tableConfig, setTableConfig] = useState([
  //   user_doc_id= true,
  //   firstName= true,
  //   lastName= true,
  //   phoneNumber= true,
  //   email= true,
  //   address= true
  // ]);

  // useEffect (() => {
  //   fetch('/api/submit-form', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(tableData)
  //   });
  // }, [tableData]);

  const tableRows = tableData.map((item) => (
    <TableContents
      key={item.user_doc_id}
      rowData={item}
      onButtonClick={() => {
        setSelectedRow(item);
        setShowPopup(true);
      }}
    />
  ));

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="tableContainer">
      <table className="dataTable">
        <thead className="tableHeader">
          <TableHeader />
        </thead>
        <tbody className="tableBody">{tableRows}</tbody>
      </table>
      {showPopup && selectedRow && (
        <ProfileEditorPopup rowData={selectedRow} onClose={closePopup} />
      )}
    </div>
  );
}

export default VolunteerPage;
